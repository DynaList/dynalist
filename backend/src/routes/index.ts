import { Express, Request, Response } from "express";

import UserRaouter from "./user.routes";

function routes(app: Express) {
  app.get("/test", async (req: Request, res: Response) => {
    res.status(200).send("Endpoint working");
  });

  app.use("/user", UserRaouter);
}

export default routes;
