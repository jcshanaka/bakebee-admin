import { AppError } from "../../../common/errors";
import { SubCategoriesRepository } from "../repositories/sub-categories.repository";
import {
  CreateSubCategoryBody,
  SetSubCategoryActiveBody,
  UpdateSubCategoryBody,
} from "../dtos/sub-categories.dto";

export class SubCategoriesService {
  private readonly subCategoriesRepository = new SubCategoriesRepository();

  list() {
    return this.subCategoriesRepository.list();
  }

  async getById(id: string) {
    const subCategory = await this.subCategoriesRepository.getById(id);
    if (!subCategory) {
      throw new AppError("Sub-category not found", 404, "not_found");
    }

    return subCategory;
  }

  create(body: CreateSubCategoryBody) {
    return this.subCategoriesRepository.create({
      sub_category_name: body.sub_category_name,
      main_category_id: body.main_category_id,
    });
  }

  async update(id: string, body: UpdateSubCategoryBody) {
    await this.getById(id);
    return this.subCategoriesRepository.update(id, body);
  }

  async setActive(id: string, body: SetSubCategoryActiveBody) {
    await this.getById(id);
    return this.subCategoriesRepository.setActive(id, body.is_active);
  }
}
