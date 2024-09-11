import { Request } from "express";
import { ZodSchema } from "zod";

export default function getRequestBody<T>(
  req: Request,
  schema: ZodSchema<T>
): T {
  if (!req.body) throw new Error("Request body not found");

  const result = schema.safeParse(req.body);
  if (!result.success) throw new Error(result.error.message);

  return result.data;
}
