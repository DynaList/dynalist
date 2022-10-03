import { Express, Request, Response } from "express";

import userRouter from "./user.routes";
import sessionRouter from "./session.routes";
import groupRouter from "./group.routes";
import listRouter from "./list.routes";

function routes(app: Express) {
  app.get("/api/test", async (req: Request, res: Response) => {
    res.status(200).send("Endpoint working");
  });

  app.use("/api/users", userRouter);
  app.use("/api/sessions", sessionRouter);
  app.use("/api/groups", groupRouter)
  app.use('/api/lists', listRouter)
}

export default routes;
