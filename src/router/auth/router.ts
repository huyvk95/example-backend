import { Router } from "express";

import { middlewareValidator } from "../../middleware";

import { signInValidator, signUpValidator } from "./validator";
import { signin, signup } from "./controller";

export const router = Router();

/**
 * @swagger
 *  /auth/signup:
 *  post:
 *    tags:
 *      - Auth
 *    summary: Sign in with exist account
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: username
 *        in: formData
 *        description: Email of user
 *        type: string
 *      - name: password
 *        in: formData
 *        description: Password of user
 *        type: string
 *    responses:
 *      '400':
 *        $ref: '#/components/BadRequest'
 *      '500':
 *        $ref: '#/components/InternalError'
 */
router.post("/signup", signUpValidator, middlewareValidator, signup);

/**
 * @swagger
 *  /auth/signin:
 *  post:
 *    tags:
 *      - Auth
 *    summary: Sign in with exist account
 *    consumes:
 *      - application/x-www-form-urlencoded
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: username
 *        in: formData
 *        description: Email of user
 *        type: string
 *      - name: password
 *        in: formData
 *        description: Password of user
 *        type: string
 *    responses:
 *      '400':
 *        $ref: '#/components/BadRequest'
 *      '500':
 *        $ref: '#/components/InternalError'
 */
router.post("/signin", signInValidator, middlewareValidator, signin);

