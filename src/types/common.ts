import { User } from "@prisma/client";

export type WithEmail<T = {}> = {
  email: string;
} & T;

export type WithUser<T = {}> = {
  user?: User;
} & T;
