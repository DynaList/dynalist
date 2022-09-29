import { Router, Express, Request, Response } from "express";

const UserRaouter = Router();

UserRaouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "User endpoint working" });
});

export default UserRaouter;
