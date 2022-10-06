import { Request, Response, NextFunction } from "express";
import { get } from "lodash";

import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req.headers, "authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  console.log("First check of accessToken: ", accessToken);

  if (!accessToken) return next();

  const { decoded, expired } = verifyJwt(accessToken);

  if (!expired) {
    res.locals.user = decoded;
    console.log({ validToken: decoded });
    return next();
  }

  const refreshToken = get(req, "headers.xrefresh");

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    console.log({ "Generate newAccessToken": newAccessToken });

    if (newAccessToken) {
      res.setHeader("Authorization", `Bearer ${newAccessToken}`);
      console.log("Assign newAccessToken");

      const result = verifyJwt(newAccessToken as string);

      res.locals.user = result.decoded;
      console.log({ "From newAccessToken": res.locals.user._doc });
    }

    return next();
  }

  return next();
};

export default deserializeUser;
