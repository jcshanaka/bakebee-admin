"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const port = process.env.PORT ? Number(process.env.PORT) : 5000;
const serverUrl = process.env.BASE_URL || `http://localhost:${port}`;
exports.swaggerSpec = (0, swagger_jsdoc_1.default)({
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
//# sourceMappingURL=swagger.js.map