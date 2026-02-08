import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
const endpoint = new URL("/openapi/download", backendUrl);

const outputPath = path.resolve(process.cwd(), "backend-api.openapi.json");
const outputDir = path.dirname(outputPath);

try {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  const data = new Uint8Array(await response.arrayBuffer());

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputPath, data);

  console.log(`Downloaded OpenAPI spec to ${outputPath}`);
} catch (error) {
  console.error("Failed to download OpenAPI spec:");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
