import dotenv from "dotenv";
dotenv.config();

export const mode: string = process.env.ENV_MODE ?? "development";

export const env = {
  development: {
    port: 3000,
    jwt: {
      secret: process.env.JWT_SECRET ?? "",
    },
  },
};
