"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../../../common/validation");
const sub_categories_controller_1 = require("../controllers/sub-categories.controller");
const sub_categories_dto_1 = require("../dtos/sub-categories.dto");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /sub-categories:
 *   get:
 *     summary: List sub-categories
 *     responses:
 *       200:
 *         description: Sub-category list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubCategory'
 */
router.get("/", sub_categories_controller_1.listSubCategories);
/**
 * @swagger
 * /sub-categories/{id}:
 *   get:
 *     summary: Get sub-category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Sub-category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: Sub-category not found
 */
router.get("/:id", sub_categories_controller_1.getSubCategory);
/**
 * @swagger
 * /sub-categories:
 *   post:
 *     summary: Create sub-category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSubCategoryRequest'
 *     responses:
 *       201:
 *         description: Created sub-category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 */
router.post("/", (0, validation_1.validateBody)(sub_categories_dto_1.createSubCategorySchema), sub_categories_controller_1.createSubCategory);
/**
 * @swagger
 * /sub-categories/{id}:
 *   put:
 *     summary: Update sub-category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateSubCategoryRequest'
 *     responses:
 *       200:
 *         description: Updated sub-category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 */
router.put("/:id", (0, validation_1.validateBody)(sub_categories_dto_1.updateSubCategorySchema), sub_categories_controller_1.updateSubCategory);
/**
 * @swagger
 * /sub-categories/{id}/status:
 *   patch:
 *     summary: Activate or deactivate sub-category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SetSubCategoryActiveRequest'
 *     responses:
 *       200:
 *         description: Updated sub-category status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 */
router.patch("/:id/status", (0, validation_1.validateBody)(sub_categories_dto_1.setSubCategoryActiveSchema), sub_categories_controller_1.setSubCategoryActive);
/**
 * @swagger
 * /sub-categories/{id}:
 *   delete:
 *     summary: Deactivate sub-category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Sub-category deactivated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 */
router.delete("/:id", (req, res, next) => (0, sub_categories_controller_1.setSubCategoryActive)({ ...req, body: { is_active: false } }, res, next));
exports.default = router;
//# sourceMappingURL=sub-categories.routes.js.map