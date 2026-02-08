import { Router, Request, Response } from "express";

import authRoutes from "../modules/auth/routes/auth.routes";
import adminRoutes from "../modules/admin/routes/admin.routes";
import categoriesRoutes from "../modules/categories/routes/categories.routes";
import subCategoriesRoutes from "../modules/sub-categories/routes/sub-categories.routes";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Root endpoint
 *     responses:
 *       200:
 *         description: Basic greeting
 */
router.get("/", (req: Request, res: Response) => {
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
router.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/categories", categoriesRoutes);
router.use("/sub-categories", subCategoriesRoutes);

export default router;
