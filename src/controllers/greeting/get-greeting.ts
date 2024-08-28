import { Request, Response } from "express";
import { WithUser } from "../../types/common";
import { parseUuidFromRequest } from "../../utils/parse-from-request";
import getGreeting from "../../services/greeting/get-greeting";

export default async function controllerGetGreeting(
  req: WithUser<Request>,
  res: Response
) {
  try {
    const uuid = parseUuidFromRequest(req);
    const greeting = await getGreeting({ uuid });
    if (!greeting) throw Error("Greeting not found");
    res.send(greeting);
  } catch (err) {
    console.error("[GreentingController][getGreeting]", err);
    res.sendStatus(500);
  }
}
