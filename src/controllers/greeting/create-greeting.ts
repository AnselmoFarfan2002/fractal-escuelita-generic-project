import { Request, Response } from "express";

export default function controllerCreateGreeting(req: Request, res: Response) {
  try {
    // to do: add business logic
    res.sendStatus(201);
  } catch (err) {
    console.error("[GreentingController][createGreeting]", err);
    res.sendStatus(500);
  }
}
