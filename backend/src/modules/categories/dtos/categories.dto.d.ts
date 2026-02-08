import { z } from "zod";
export declare const createCategorySchema: z.ZodObject<{
    category_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    category_name: string;
}, {
    category_name: string;
}>;
export declare const updateCategorySchema: z.ZodObject<{
    category_name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    category_name?: string | undefined;
}, {
    category_name?: string | undefined;
}>;
export declare const setCategoryActiveSchema: z.ZodObject<{
    is_active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    is_active: boolean;
}, {
    is_active: boolean;
}>;
export type CreateCategoryBody = z.infer<typeof createCategorySchema>;
export type UpdateCategoryBody = z.infer<typeof updateCategorySchema>;
export type SetCategoryActiveBody = z.infer<typeof setCategoryActiveSchema>;
//# sourceMappingURL=categories.dto.d.ts.map