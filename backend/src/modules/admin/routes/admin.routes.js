"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const router = (0, express_1.Router)();
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
router.get("/summary", admin_controller_1.getSummary);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map