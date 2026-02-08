import express, { Express } from "express";
import { existsSync } from "fs";
import { resolve } from "path";
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
app.get("/openapi/download", (req, res) => {
	const filePath = resolve(__dirname, "..", "backend-api.openapi.json");
	if (existsSync(filePath)) {
		res.download(filePath, "backend-api.openapi.json");
		return;
	}

	res.setHeader("Content-Disposition", "attachment; filename=backend-api.openapi.json");
	res.json(swaggerSpec);
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
