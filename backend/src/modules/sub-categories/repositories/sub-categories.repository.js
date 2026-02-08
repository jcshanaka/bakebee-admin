"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoriesRepository = void 0;
const prisma_1 = __importDefault(require("../../../common/prisma"));
class SubCategoriesRepository {
    list() {
        return prisma_1.default.subCategory.findMany({
            include: { main_category: true },
            orderBy: { sub_category_name: "asc" },
        });
    }
    getById(id) {
        return prisma_1.default.subCategory.findUnique({
            where: { id },
            include: { main_category: true },
        });
    }
    create(data) {
        return prisma_1.default.subCategory.create({ data });
    }
    update(id, data) {
        const updateData = {};
        if (data.sub_category_name !== undefined) {
            updateData.sub_category_name = data.sub_category_name;
        }
        if (data.main_category_id !== undefined) {
            updateData.main_category_id = data.main_category_id;
        }
        return prisma_1.default.subCategory.update({ where: { id }, data: updateData });
    }
    setActive(id, is_active) {
        return prisma_1.default.subCategory.update({ where: { id }, data: { is_active } });
    }
}
exports.SubCategoriesRepository = SubCategoriesRepository;
//# sourceMappingURL=sub-categories.repository.js.map