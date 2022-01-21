import { Router } from "express";

import { middlewareValidator } from "../../middleware";

import { info } from "./controller";
import { infoValidator } from "./validator";

export const router = Router();

/**
 * @swagger
 *  /user/info:
 *  get:
 *    tags:
 *      - Auth
 *    summary: Sign in with exist account
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    produces:
 *      - application/json
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '400':
 *        $ref: '#/components/BadRequest'
 *      '500':
 *        $ref: '#/components/InternalError'
 */
router.get("/info", infoValidator, middlewareValidator, info);
