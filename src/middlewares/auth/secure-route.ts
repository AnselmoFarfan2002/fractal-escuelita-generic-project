import { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { env } from "../../config/environment";
import { WithEmail, WithUser } from "../../types/common";
import getUser from "../../services/user/get-user";

async function parseToken(authorization: string): Promise<WithEmail | null> {
  try {
    const token = authorization.split(" ")[1];
    //prettier-ignore
    const {payload} = await jwtVerify(token, Buffer.from(env.development.jwt.secret, "base64"));
    return payload as unknown as WithEmail;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function secureRoute(
  req: WithUser<Request>,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw Error("Authorization header not found");
    const payload = await parseToken(authorization);
    if (!payload) throw Error("Wrong token format");

    const user = await getUser({ email: payload.email });
    if (!user) throw Error("User not found");

    req.user = user;

    next();
  } catch (err) {
    console.error("[Auth][middleware]", err);
    return res.sendStatus(401);
  }
}
