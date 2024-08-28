import { Greeting } from "../../repository/greeting/fetch-greeting";
import getGreetingByUuid from "../../repository/greeting/get-greeting";
import { SingleServiceResponse, WithUuid } from "../../types/common";

export default async function getGreeting({
  uuid,
}: WithUuid): Promise<SingleServiceResponse<Greeting> | null> {
  try {
    const greeting = await getGreetingByUuid({ uuid });
    if (!greeting) return null;

    return {
      data: greeting,
      meta: undefined,
    };
  } catch (err) {
    console.error("[GreetingResource][getGreeting]", err);
    return null;
  }
}
