import { body, header } from "express-validator";

export const infoValidator = [
  header("authorization").notEmpty().withMessage("Token empty"),
];
