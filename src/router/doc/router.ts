import { Router } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Retail server API",
      version: process.env.VERSION || "",
    },
    host: `localhost:3000`,
    basePath: "/",
    schemes: ["http", "https"],
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "authorization",
        scheme: "bearer",
        in: "header",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  // Paths to files containing OpenAPI definitions
  apis: [`${__dirname}/../**/*.ts`],
});

/**
 * @swagger
 * parameters:
 *  page:
 *    name: page
 *    description: Page index
 *    in: query
 *    type: string
 *    required: false
 *  size:
 *    name: size
 *    description: Number record response
 *    in: query
 *    type: string
 *    required: false
 *  pagination:
 *    name: pagination
 *    type: object
 *    properties:
 *      page:
 *        type: number
 *      maxPage:
 *        type: number
 *  message:
 *    name: message
 *    type: object
 *    properties:
 *      message:
 *        type: string
 */

/**
 * @swagger
 * components:
 *  ResponseMessage:
 *    description: Successful
 *    schema:
 *      properties:
 *        message:
 *          type: string
 *  BadRequest:
 *    description: Bad request
 *    schema:
 *      properties:
 *        message:
 *          type: string
 *        data:
 *          type: object
 *  InternalError:
 *    description: Internal server error
 *    schema:
 *      properties:
 *        message:
 *          type: string
 *  AuthenticaionError:
 *    description: Authenticaion error
 *    schema:
 *      properties:
 *        message:
 *          type: string
 */

export const router = Router();

router.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: "Retail documents",
    swaggerOptions: { docExpansion: "none" },
  })
);
