import { Router, Request, Response } from "express";

import authRoutes from "../modules/auth/auth.routes";
import adminRoutes from "../modules/admin/admin.routes";

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

export default router;
