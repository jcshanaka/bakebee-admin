"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSubCategoryActiveSchema = exports.updateSubCategorySchema = exports.createSubCategorySchema = void 0;
const zod_1 = require("zod");
exports.createSubCategorySchema = zod_1.z.object({
    sub_category_name: zod_1.z.string().min(2),
    main_category_id: zod_1.z.string().uuid(),
});
exports.updateSubCategorySchema = zod_1.z.object({
    sub_category_name: zod_1.z.string().min(2).optional(),
    main_category_id: zod_1.z.string().uuid().optional(),
});
exports.setSubCategoryActiveSchema = zod_1.z.object({
    is_active: zod_1.z.boolean(),
});
//# sourceMappingURL=sub-categories.dto.js.map