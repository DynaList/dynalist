import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/test", async (req: Request, res: Response) => {
    res.status(200).send("Endpoint working");
  });
}

export default routes;
