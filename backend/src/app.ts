import express, { Express } from "express";
import swaggerUi from "swagger-ui-express";

import routes from "./routes";
import { swaggerSpec } from "./docs/swagger";
import { errorHandler } from "./middlewares/error-handler";
import { notFoundHandler } from "./middlewares/not-found";

const app: Express = express();

app.use(express.json());
app.get("/openapi.json", (req, res) => {
	res.json(swaggerSpec);
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
