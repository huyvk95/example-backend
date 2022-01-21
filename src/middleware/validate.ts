import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const middlewareValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    const data = (error as any).mapped();
    const serverError = new Error(JSON.stringify(data));
    next(serverError);
  }
};
