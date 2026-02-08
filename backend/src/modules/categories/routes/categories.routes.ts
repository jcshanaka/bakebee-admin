import { Router } from "express";

import { validateBody } from "../../../common/validation";
import {
  createCategory,
  getCategory,
  listCategories,
  setCategoryActive,
  updateCategory,
} from "../controllers/categories.controller";
import {
  createCategorySchema,
  setCategoryActiveSchema,
  updateCategorySchema,
} from "../dtos/categories.dto";

const router = Router();

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
router.get("/", listCategories);

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
router.get("/:id", getCategory);

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
router.post("/", validateBody(createCategorySchema), createCategory);

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
router.put("/:id", validateBody(updateCategorySchema), updateCategory);

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
router.patch("/:id/status", validateBody(setCategoryActiveSchema), setCategoryActive);

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
router.delete("/:id", (req, res, next) =>
  setCategoryActive(
    { ...req, body: { is_active: false } } as never,
    res,
    next
  )
);

export default router;
