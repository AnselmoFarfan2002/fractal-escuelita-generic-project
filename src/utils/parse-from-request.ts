import { Request } from "express";
import { WithUser } from "../types/common";

export function parsePaginationFromRequest(req: Request) {
  const { page, pageSize } = req.query;
  return { page: Number(page || 0), pageSize: Number(pageSize || 10) };
}

export function parseEmailFromRequest(req: WithUser<Request>) {
  const email = req.user?.email;
  if (!email) throw new Error("Email not found");
  return email;
}

export function parseUuidFromRequest(req: WithUser<Request>) {
  const { uuid } = req.params;
  if (!uuid) throw new Error("UUID not found");
  return uuid;
}
