import jwt from "jsonwebtoken";

import { PRIVATE_KEY, PUBLIC_KEY } from "../accessKeys";

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, PRIVATE_KEY, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, PUBLIC_KEY);

    return { valid: true, expired: false, decoded };
  } catch (e: any) {
    console.log(e.message);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
