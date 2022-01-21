import { body, header } from "express-validator";

export const signUpValidator = [
  body("username").isString().withMessage("Username must be string"),
  body("username")
    .isLength({ min: 8, max: 12 })
    .withMessage("Username must be at least 8 characters."),
  body("password").isString().withMessage("Password must be string"),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("Password must be at least 8 characters."),
];

export const signInValidator = signUpValidator;
