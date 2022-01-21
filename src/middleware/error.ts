import { NextFunction, Request, Response } from "express";

export const middlewareErrorHandle = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json(error.message);
};
