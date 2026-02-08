import { z } from "zod";

export const createCategorySchema = z.object({
  category_name: z.string().min(2),
});

export const updateCategorySchema = z.object({
  category_name: z.string().min(2).optional(),
});

export const setCategoryActiveSchema = z.object({
  is_active: z.boolean(),
});

export type CreateCategoryBody = z.infer<typeof createCategorySchema>;
export type UpdateCategoryBody = z.infer<typeof updateCategorySchema>;
export type SetCategoryActiveBody = z.infer<typeof setCategoryActiveSchema>;
