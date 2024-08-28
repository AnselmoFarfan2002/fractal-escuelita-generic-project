import { WithUuid } from "../../types/common";
import { DRAFT_GREETINGS, Greeting } from "./fetch-greeting";

export default async function getGreetingByUuid({
  uuid,
}: WithUuid): Promise<Greeting | null> {
  try {
    const greeting = DRAFT_GREETINGS.find((greeting) => greeting.uuid === uuid);
    if (!greeting) throw Error("Greeting not found");
    return greeting;
  } catch (err) {
    console.error("[GreetingRepository][getGreetingByUuid]", err);
    return null;
  }
}
