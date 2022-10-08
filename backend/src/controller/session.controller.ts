import { Request, Response } from "express";

import { validatePassword } from "../service/user.service";
import {
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";

export async function createSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send("Invalid email or password.");

  const session = await createSession(user._id, req.get("userAgent") || "");

  // Create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: `${process.env.ACCESS_TOKEN_TTL}` }
  );

  // Create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: `${process.env.REFRESH_TOKEN_TTL}` }
  );

  // Return access and refresh tokens
  return res.send({ accessToken, refreshToken });
}

export async function getSessionsHandler(req: Request, res: Response) {
  let userId;
  if ('_doc' in res.locals.user) {
    userId = res.locals.user._doc._id;
  } else {
    userId = res.locals.user._id;
  }
  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions[0]);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({ accessToken: null, refreshToken: null });
}
