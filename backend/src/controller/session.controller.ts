import { Request, Response } from "express";

import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send("Invalid email or password.");

  const session = await createSession(user._id, req.get("userAgent") || "");

  // Create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: `${process.env.ACCESS_TOKEN_TTL}` } // 15 minutes
  );
  // Create a refresh token
  // Return access and refresh tokens
}
