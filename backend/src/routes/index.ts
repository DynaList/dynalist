import { Express, Request, Response } from "express";

import userRouter from "./user.routes";
import sessionRouter from "./session.routes";
import groupRouter from "./group.routes";

function routes(app: Express) {
  app.get("/api/test", async (req: Request, res: Response) => {
    res.status(200).send("Endpoint working");
  });

  app.use("/api/users", userRouter);
  app.use("/api/sessions", sessionRouter);
  app.use("/api/groups", groupRouter)

  // 404
  app.get('/*', async (req: Request, res: Response) => {
    res.status(404).send("Error 404: Could not find route")
  })
}

export default routes;
