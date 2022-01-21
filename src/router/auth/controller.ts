import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { UserModel } from "../../database";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    if (await UserModel.findOne({ username })) throw new Error("User existed");

    const user = await UserModel.create({ username, password });

    const token = jwt.sign(user.toObject(), "hello");

    const userData = user.toObject();
    delete userData.password;

    res.send({ user: userData, token });
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username }).select("+password");

    if (!user) throw new Error("User not existed");

    if (user.get("password") !== password)
      throw new Error("Password not match");

    const userData = user.toObject();
    delete userData.password;

    const token = jwt.sign(userData, "hello");

    res.send({ user: userData, token });
  } catch (error) {
    next(error);
  }
};
