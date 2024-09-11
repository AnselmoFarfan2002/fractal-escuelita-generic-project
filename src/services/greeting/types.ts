import z from "zod";

export const GreetingCommandSchema = z.object({
  msg: z.string().min(1),
  intensity: z.enum(["low", "medium", "high"]),
  fingersOnHand: z.number().min(0).max(5),
});

export type GreetingCommand = z.infer<typeof GreetingCommandSchema>;
