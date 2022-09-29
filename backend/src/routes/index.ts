import { Express, Request, Response } from "express";

import userRouter from "./user.routes";

function routes(app: Express) {
  app.get("/api/test", async (req: Request, res: Response) => {
    res.status(200).send("Endpoint working");
  });

  app.use("/api/user", userRouter);
}

export default routes;
