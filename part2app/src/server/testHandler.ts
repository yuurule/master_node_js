import { Request, Response } from "express";

export const testHandler = async (req:Request, resp: Response) => {
  resp.setHeader("Content-type", "application/json");
  resp.json(req.body);
  resp.end();
}