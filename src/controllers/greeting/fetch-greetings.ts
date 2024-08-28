import { Request, Response } from "express";
import { WithUser } from "../../types/common";
import {
  parseEmailFromRequest,
  parsePaginationFromRequest,
} from "../../utils/parse-from-request";
import fetchGreetings from "../../services/greeting/fetch-greetings";

export default async function controllerFetchGreetings(
  req: WithUser<Request>,
  res: Response
) {
  try {
    const { page, pageSize } = parsePaginationFromRequest(req);
    const email = parseEmailFromRequest(req);

    const greetings = await fetchGreetings({ page, pageSize, email });
    if (!greetings) throw Error("No greetings found");

    res.json(greetings);
  } catch (err) {
    console.error("[GreentingController][fetchGreetings]", err);
    res.sendStatus(500);
  }
}
