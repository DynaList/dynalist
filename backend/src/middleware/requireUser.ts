import { Request, Response, NextFunction } from "express";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  console.log({ "Checking on user": user });

  if (!user) return res.sendStatus(403);
  console.log("After 403");

  return next();
};

export default requireUser;
