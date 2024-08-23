import { getUserByEmail } from "../../repository/user/get-user";
import { WithEmail } from "../../types/common";

export default async function getUser({ email }: WithEmail) {
  try {
    return await getUserByEmail({ email });
  } catch (err) {
    console.log("[UserResource][getUser]", err);
    return null;
  }
}
