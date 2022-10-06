import { FilterQuery, UpdateQuery } from "mongoose";
import { get } from "lodash";

import SessionModel, { SessionDocument } from "../models/session.model";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { findUser } from "./user.service";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });
  console.log({ "Session created": session });

  return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).populate({
    path: "user",
    select: ["firstName", "lastName", "zip", "groups"],
  });
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken);
  console.log({ decoded: decoded });

  if (!decoded || !get(decoded, "session")) return false;

  const [session] = await SessionModel.find({
    $or: [
      { _id: get(decoded, "session"), valid: true },
      { user: get(decoded, "_id"), valid: true },
    ],
  });
  console.log({ session: session });

  if (!session || !session.valid) return false;

  const user = await findUser(session.user);
  console.log({ "User from reIssueAccessToken": user });

  if (!user) return false;

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: process.env.ACCESS_TOKEN_TTL } // 15 minutes
  );

  return accessToken;
}
