/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           minLength: 8
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           minLength: 2
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           minLength: 8
 *     AuthTokenResponse:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 *     ApiError:
 *       type: object
 *       properties:
 *         error:
 *           type: object
 *           properties:
 *             code:
 *               type: string
 *             message:
 *               type: string
 *             details:
 *               nullable: true
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         category_name:
 *           type: string
 *         is_active:
 *           type: boolean
 *         sub_categories:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SubCategory'
 *     SubCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         sub_category_name:
 *           type: string
 *         main_category_id:
 *           type: string
 *           format: uuid
 *         is_active:
 *           type: boolean
 *     CreateCategoryRequest:
 *       type: object
 *       required:
 *         - category_name
 *       properties:
 *         category_name:
 *           type: string
 *           minLength: 2
 *     UpdateCategoryRequest:
 *       type: object
 *       properties:
 *         category_name:
 *           type: string
 *           minLength: 2
 *     SetCategoryActiveRequest:
 *       type: object
 *       required:
 *         - is_active
 *       properties:
 *         is_active:
 *           type: boolean
 *     CreateSubCategoryRequest:
 *       type: object
 *       required:
 *         - sub_category_name
 *         - main_category_id
 *       properties:
 *         sub_category_name:
 *           type: string
 *           minLength: 2
 *         main_category_id:
 *           type: string
 *           format: uuid
 *     UpdateSubCategoryRequest:
 *       type: object
 *       properties:
 *         sub_category_name:
 *           type: string
 *           minLength: 2
 *         main_category_id:
 *           type: string
 *           format: uuid
 *     SetSubCategoryActiveRequest:
 *       type: object
 *       required:
 *         - is_active
 *       properties:
 *         is_active:
 *           type: boolean
 */
export {};
