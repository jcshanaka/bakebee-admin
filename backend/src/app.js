"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = require("path");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./docs/swagger");
const error_handler_1 = require("./middlewares/error-handler");
const not_found_1 = require("./middlewares/not-found");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/openapi.json", (req, res) => {
    res.json(swagger_1.swaggerSpec);
});
app.get("/openapi/download", (req, res) => {
    const filePath = (0, path_1.resolve)(__dirname, "..", "backend-api.openapi.json");
    if ((0, fs_1.existsSync)(filePath)) {
        res.download(filePath, "backend-api.openapi.json");
        return;
    }
    res.setHeader("Content-Disposition", "attachment; filename=backend-api.openapi.json");
    res.json(swagger_1.swaggerSpec);
});
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use("/", routes_1.default);
app.use(not_found_1.notFoundHandler);
app.use(error_handler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map