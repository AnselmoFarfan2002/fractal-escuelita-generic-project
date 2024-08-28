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
export const DRAFT_GREETINGS: Greeting[] = [
  {
    msg: "Hello World 👑 #1",
    email: "anselmo@test.com",
    uuid: "f36bc837-9d4c-4d11-8f8d-54341a723589",
  },
  {
    msg: "Hello World 👑 #2",
    email: "anselmo@test.com",
    uuid: "56013598-bd89-42e0-86cd-a172baf27d5f",
  },
  {
    msg: "Hello World 👑 #3",
    email: "anselmo@test.com",
    uuid: "71e940a4-6b67-44ae-8846-fa3bd4865a0f",
  },
  {
    msg: "Hello World 👑 #4",
    email: "jorge@test.com",
    uuid: "b283cffe-e918-4779-abb5-1979cf41093a",
  },
  {
    msg: "Hello World 👑 #5",
    email: "anselmo@test.com",
    uuid: "c0aa5fb0-dc9d-4767-87e8-95ab7f992119",
  },
];
