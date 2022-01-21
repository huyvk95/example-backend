import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { UserModel } from "../database";

export const middlewareAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    const verifyData = jwt.verify(authorization as any, "hello") as any;

    const user = await UserModel.findOne({ username: verifyData.username });

    if (!user) throw new Error("User not existed");

    (req as any).user = user.toObject();

    next();
  } catch (error) {
    next(error);
  }
};
