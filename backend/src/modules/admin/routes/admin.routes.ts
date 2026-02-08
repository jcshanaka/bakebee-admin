import { Router } from "express";

import { getSummary } from "../controllers/admin.controller";

const router = Router();

/**
 * @swagger
 * /admin/summary:
 *   get:
 *     summary: Admin summary
 *     responses:
 *       200:
 *         description: Summary data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: admin summary
 */
router.get("/summary", getSummary);

export default router;
