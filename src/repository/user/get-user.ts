import { db } from "../../config/database";
import { WithEmail } from "../../types/common";

export function getUserByEmail({ email }: WithEmail) {
  return db.user.findUnique({ where: { email } });
}
