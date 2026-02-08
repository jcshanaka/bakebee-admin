"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const prisma_1 = __importDefault(require("../../../common/prisma"));
class CategoriesRepository {
    list() {
        return prisma_1.default.category.findMany({
            include: { sub_categories: true },
            orderBy: { category_name: "asc" },
        });
    }
    getById(id) {
        return prisma_1.default.category.findUnique({
            where: { id },
            include: { sub_categories: true },
        });
    }
    create(data) {
        return prisma_1.default.category.create({ data });
    }
    update(id, data) {
        const updateData = {};
        if (data.category_name !== undefined) {
            updateData.category_name = data.category_name;
        }
        return prisma_1.default.category.update({ where: { id }, data: updateData });
    }
    setActive(id, is_active) {
        return prisma_1.default.category.update({ where: { id }, data: { is_active } });
    }
}
exports.CategoriesRepository = CategoriesRepository;
//# sourceMappingURL=categories.repository.js.map