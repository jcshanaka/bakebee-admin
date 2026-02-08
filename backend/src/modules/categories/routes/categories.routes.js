"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../../../common/validation");
const categories_controller_1 = require("../controllers/categories.controller");
const categories_dto_1 = require("../dtos/categories.dto");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: List categories
 *     responses:
 *       200:
 *         description: Category list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get("/", categories_controller_1.listCategories);
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 */
router.get("/:id", categories_controller_1.getCategory);
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCategoryRequest'
 *     responses:
 *       201:
 *         description: Created category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.post("/", (0, validation_1.validateBody)(categories_dto_1.createCategorySchema), categories_controller_1.createCategory);
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update category
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
 *             $ref: '#/components/schemas/UpdateCategoryRequest'
 *     responses:
 *       200:
 *         description: Updated category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.put("/:id", (0, validation_1.validateBody)(categories_dto_1.updateCategorySchema), categories_controller_1.updateCategory);
/**
 * @swagger
 * /categories/{id}/status:
 *   patch:
 *     summary: Activate or deactivate category
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
 *             $ref: '#/components/schemas/SetCategoryActiveRequest'
 *     responses:
 *       200:
 *         description: Updated category status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.patch("/:id/status", (0, validation_1.validateBody)(categories_dto_1.setCategoryActiveSchema), categories_controller_1.setCategoryActive);
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Deactivate category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Category deactivated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.delete("/:id", (req, res, next) => (0, categories_controller_1.setCategoryActive)({ ...req, body: { is_active: false } }, res, next));
exports.default = router;
//# sourceMappingURL=categories.routes.js.map