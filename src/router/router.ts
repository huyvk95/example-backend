import { Router } from "express";

import { middlewareErrorHandle, middlewareAuthentication } from "../middleware";

import { router as AuthRouter } from "./auth";
import { router as UserRouter } from "./user";
import { router as DocRouter } from "./doc";

export const router = Router();

router.use("/doc", DocRouter);
router.use("/auth", AuthRouter);
router.use(middlewareAuthentication);
router.use("/user", UserRouter);
router.use(middlewareErrorHandle);
