import { ZodSchema } from "zod";
import getRequestBody from "../utils/get-request-body";
import { NextFunction, Request, Response } from "express";

export default function validator(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      getRequestBody(req, schema);
      next();
    } catch (err) {
      console.error("[GreentingController][createGreeting]", err);
      res.sendStatus(400);
    }
  };
}
