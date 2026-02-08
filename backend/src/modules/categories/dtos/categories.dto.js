"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCategoryActiveSchema = exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    category_name: zod_1.z.string().min(2),
});
exports.updateCategorySchema = zod_1.z.object({
    category_name: zod_1.z.string().min(2).optional(),
});
exports.setCategoryActiveSchema = zod_1.z.object({
    is_active: zod_1.z.boolean(),
});
//# sourceMappingURL=categories.dto.js.map