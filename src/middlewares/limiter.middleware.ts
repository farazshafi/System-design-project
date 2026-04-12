import { Request, Response, NextFunction } from "express";

const MAX_CONCURRENT = 100;
let active = 0;

export const limiter = (req: Request, res: Response, next: NextFunction) => {
  if (active >= MAX_CONCURRENT) {
    return res.status(503).json({
      message: "Server overloaded",
    });
  }

  active++;

  res.on("finish", () => {
    active--;
  });

  next();
};
