import { AppError } from "../../../common/errors";
import { CategoriesRepository } from "../repositories/categories.repository";
import {
  CreateCategoryBody,
  SetCategoryActiveBody,
  UpdateCategoryBody,
} from "../dtos/categories.dto";

export class CategoriesService {
  private readonly categoriesRepository = new CategoriesRepository();

  list() {
    return this.categoriesRepository.list();
  }

  async getById(id: string) {
    const category = await this.categoriesRepository.getById(id);
    if (!category) {
      throw new AppError("Category not found", 404, "not_found");
    }

    return category;
  }

  create(body: CreateCategoryBody) {
    return this.categoriesRepository.create({
      category_name: body.category_name,
    });
  }

  async update(id: string, body: UpdateCategoryBody) {
    await this.getById(id);
    return this.categoriesRepository.update(id, body);
  }

  async setActive(id: string, body: SetCategoryActiveBody) {
    await this.getById(id);
    return this.categoriesRepository.setActive(id, body.is_active);
  }
}
