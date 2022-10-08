import jwt from "jsonwebtoken";
import dotenv from "dotenv"

// import { PRIVATE_KEY, PUBLIC_KEY } from "../accessKeys";

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, process.env.PRIVATE_KEY!, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.PUBLIC_KEY!);
    console.log({ "Decode from verifyJwt": decoded });

    return { valid: true, expired: false, decoded };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
