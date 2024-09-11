import { PaginationDto } from "../../types/dto/pagination";

export async function fetchGreetingsByEmail({
  email,
  page,
  pageSize,
}: PaginationDto): Promise<Greeting[] | null> {
  try {
    const greetings = DRAFT_GREETINGS.filter(
      (greeting) => greeting.email === email
    ).slice(page * pageSize, (page + 1) * pageSize);
    if (!greetings) throw Error("No greetings found");
    return greetings;
  } catch (err) {
    console.error("[GreetingRepository][fetchGreetingsByEmail]", err);
    return null;
  }
}

export type Greeting = { msg: string; email: string; uuid: string };
export const DRAFT_GREETINGS: Greeting[] = Array.from(
  { length: 30 },
  (_: any, i: number) => ({
    msg: `Hello World 👑 #${i + 1}`,
    email: [
      "anselmo@test.com",
      "jorge@test.com",
      "sebastian@test.com",
      "luis@test.com",
    ][Math.floor(Math.random() * 4)],
    uuid: `f36bc837-9d4c-4d11-8f8d-54341a723589`,
    intensity: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
    fingersOnHand: Math.floor(Math.random() * 5),
  })
);
