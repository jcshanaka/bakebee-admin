import { Router } from "express";

import { validateBody } from "../../../common/validation";
import {
  createSubCategory,
  getSubCategory,
  listSubCategories,
  setSubCategoryActive,
  updateSubCategory,
} from "../controllers/sub-categories.controller";
import {
  createSubCategorySchema,
  setSubCategoryActiveSchema,
  updateSubCategorySchema,
} from "../dtos/sub-categories.dto";

const router = Router();

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
router.get("/", listSubCategories);

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
router.get("/:id", getSubCategory);

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
router.post("/", validateBody(createSubCategorySchema), createSubCategory);

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
router.put("/:id", validateBody(updateSubCategorySchema), updateSubCategory);

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
router.patch("/:id/status", validateBody(setSubCategoryActiveSchema), setSubCategoryActive);

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
router.delete("/:id", (req, res, next) =>
  setSubCategoryActive(
    { ...req, body: { is_active: false } } as never,
    res,
    next
  )
);

export default router;
