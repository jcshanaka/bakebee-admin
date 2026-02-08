import { Prisma } from "@prisma/client";

import prisma from "../../../common/prisma";

export class CategoriesRepository {
  list() {
    return prisma.category.findMany({
      include: { sub_categories: true },
      orderBy: { category_name: "asc" },
    });
  }

  getById(id: string) {
    return prisma.category.findUnique({
      where: { id },
      include: { sub_categories: true },
    });
  }

  create(data: { category_name: string }) {
    return prisma.category.create({ data });
  }

  update(id: string, data: { category_name?: string | undefined }) {
    const updateData: Prisma.CategoryUpdateInput = {};
    if (data.category_name !== undefined) {
      updateData.category_name = data.category_name;
    }

    return prisma.category.update({ where: { id }, data: updateData });
  }

  setActive(id: string, is_active: boolean) {
    return prisma.category.update({ where: { id }, data: { is_active } });
  }
}
