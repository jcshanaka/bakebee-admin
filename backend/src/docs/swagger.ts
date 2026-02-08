import swaggerJSDoc from "swagger-jsdoc";

const port = process.env.PORT ? Number(process.env.PORT) : 5000;
const serverUrl = process.env.BASE_URL || `http://localhost:${port}`;

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Bakebee Admin API",
      version: "1.0.0",
    },
    servers: [{ url: serverUrl }],
  },
  apis: ["src/**/*.ts", "dist/**/*.js"],
});
