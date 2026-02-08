"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const swagger_1 = require("./swagger");
const outputPath = (0, path_1.resolve)(__dirname, "..", "..", "backend-api.openapi.json");
(0, fs_1.writeFileSync)(outputPath, JSON.stringify(swagger_1.swaggerSpec, null, 2));
console.log(`OpenAPI spec written to ${outputPath}`);
//# sourceMappingURL=generate-openapi.js.map