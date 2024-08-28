import {
  fetchGreetingsByEmail,
  Greeting,
} from "../../repository/greeting/fetch-greeting";
import { ServiceResponse } from "../../types/common";
import { PaginationDto } from "../../types/dto/pagination";

export default async function fetchGreetings({
  page,
  pageSize,
  email,
}: PaginationDto): Promise<ServiceResponse<Greeting[]> | null> {
  try {
    const greetings = await fetchGreetingsByEmail({ page, pageSize, email });
    if (!greetings) return null;
    return {
      data: greetings,
      meta: {
        page,
        pageSize,
      },
    };
  } catch (err) {
    console.error("[GreetingService][fetchGreetings]", err);
    return null;
  }
}
