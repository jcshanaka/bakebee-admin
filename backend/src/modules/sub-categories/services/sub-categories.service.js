"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoriesService = void 0;
const errors_1 = require("../../../common/errors");
const sub_categories_repository_1 = require("../repositories/sub-categories.repository");
class SubCategoriesService {
    subCategoriesRepository = new sub_categories_repository_1.SubCategoriesRepository();
    list() {
        return this.subCategoriesRepository.list();
    }
    async getById(id) {
        const subCategory = await this.subCategoriesRepository.getById(id);
        if (!subCategory) {
            throw new errors_1.AppError("Sub-category not found", 404, "not_found");
        }
        return subCategory;
    }
    create(body) {
        return this.subCategoriesRepository.create({
            sub_category_name: body.sub_category_name,
            main_category_id: body.main_category_id,
        });
    }
    async update(id, body) {
        await this.getById(id);
        return this.subCategoriesRepository.update(id, body);
    }
    async setActive(id, body) {
        await this.getById(id);
        return this.subCategoriesRepository.setActive(id, body.is_active);
    }
}
exports.SubCategoriesService = SubCategoriesService;
//# sourceMappingURL=sub-categories.service.js.map