"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const errors_1 = require("../../../common/errors");
const categories_repository_1 = require("../repositories/categories.repository");
class CategoriesService {
    categoriesRepository = new categories_repository_1.CategoriesRepository();
    list() {
        return this.categoriesRepository.list();
    }
    async getById(id) {
        const category = await this.categoriesRepository.getById(id);
        if (!category) {
            throw new errors_1.AppError("Category not found", 404, "not_found");
        }
        return category;
    }
    create(body) {
        return this.categoriesRepository.create({
            category_name: body.category_name,
        });
    }
    async update(id, body) {
        await this.getById(id);
        return this.categoriesRepository.update(id, body);
    }
    async setActive(id, body) {
        await this.getById(id);
        return this.categoriesRepository.setActive(id, body.is_active);
    }
}
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map