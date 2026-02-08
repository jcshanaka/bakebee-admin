"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../modules/auth/routes/auth.routes"));
const admin_routes_1 = __importDefault(require("../modules/admin/routes/admin.routes"));
const categories_routes_1 = __importDefault(require("../modules/categories/routes/categories.routes"));
const sub_categories_routes_1 = __importDefault(require("../modules/sub-categories/routes/sub-categories.routes"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Root endpoint
 *     responses:
 *       200:
 *         description: Basic greeting
 */
router.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript!");
});
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 */
router.get("/health", (req, res) => {
    res.json({ status: "OK" });
});
router.use("/auth", auth_routes_1.default);
router.use("/admin", admin_routes_1.default);
router.use("/categories", categories_routes_1.default);
router.use("/sub-categories", sub_categories_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map