import jwt from "jsonwebtoken";

const publicKey: string = process.env.PUBLIC_KEY!;
const privateKey: string = process.env.PRIVATE_KEY!;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

function verifyJwt() {}
