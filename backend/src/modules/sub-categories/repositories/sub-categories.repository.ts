import { Prisma } from "@prisma/client";

import prisma from "../../../common/prisma";

export class SubCategoriesRepository {
  list() {
    return prisma.subCategory.findMany({
      include: { main_category: true },
      orderBy: { sub_category_name: "asc" },
    });
  }

  getById(id: string) {
    return prisma.subCategory.findUnique({
      where: { id },
      include: { main_category: true },
    });
  }

  create(data: { sub_category_name: string; main_category_id: string }) {
    return prisma.subCategory.create({ data });
  }

  update(
    id: string,
    data: {
      sub_category_name?: string | undefined;
      main_category_id?: string | undefined;
    }
  ) {
    const updateData: Prisma.SubCategoryUncheckedUpdateInput = {};
    if (data.sub_category_name !== undefined) {
      updateData.sub_category_name = data.sub_category_name;
    }
    if (data.main_category_id !== undefined) {
      updateData.main_category_id = data.main_category_id;
    }

    return prisma.subCategory.update({ where: { id }, data: updateData });
  }

  setActive(id: string, is_active: boolean) {
    return prisma.subCategory.update({ where: { id }, data: { is_active } });
  }
}
