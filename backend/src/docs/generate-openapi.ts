import { writeFileSync } from "fs";
import { resolve } from "path";

import { swaggerSpec } from "./swagger";

const outputPath = resolve(__dirname, "..", "..", "backend-api.openapi.json");
writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log(`OpenAPI spec written to ${outputPath}`);
