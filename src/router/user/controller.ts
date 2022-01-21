import { Request, Response, NextFunction } from "express";

export const info = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ user: (req as any).user });
  } catch (error) {
    next(error);
  }
};
