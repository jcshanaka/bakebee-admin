import { z } from "zod";

export const createSubCategorySchema = z.object({
  sub_category_name: z.string().min(2),
  main_category_id: z.string().uuid(),
});

export const updateSubCategorySchema = z.object({
  sub_category_name: z.string().min(2).optional(),
  main_category_id: z.string().uuid().optional(),
});

export const setSubCategoryActiveSchema = z.object({
  is_active: z.boolean(),
});

export type CreateSubCategoryBody = z.infer<typeof createSubCategorySchema>;
export type UpdateSubCategoryBody = z.infer<typeof updateSubCategorySchema>;
export type SetSubCategoryActiveBody = z.infer<typeof setSubCategoryActiveSchema>;
