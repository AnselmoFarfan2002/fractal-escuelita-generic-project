import { Request, Response } from "express";
import { WithUser } from "../../types/common";

export function getGreeting(req: WithUser<Request>, res: Response) {
  res.send({ msg: "Hello World 👑" + req.user?.email });
}
