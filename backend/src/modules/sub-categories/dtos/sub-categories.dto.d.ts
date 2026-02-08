import { z } from "zod";
export declare const createSubCategorySchema: z.ZodObject<{
    sub_category_name: z.ZodString;
    main_category_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sub_category_name: string;
    main_category_id: string;
}, {
    sub_category_name: string;
    main_category_id: string;
}>;
export declare const updateSubCategorySchema: z.ZodObject<{
    sub_category_name: z.ZodOptional<z.ZodString>;
    main_category_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sub_category_name?: string | undefined;
    main_category_id?: string | undefined;
}, {
    sub_category_name?: string | undefined;
    main_category_id?: string | undefined;
}>;
export declare const setSubCategoryActiveSchema: z.ZodObject<{
    is_active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    is_active: boolean;
}, {
    is_active: boolean;
}>;
export type CreateSubCategoryBody = z.infer<typeof createSubCategorySchema>;
export type UpdateSubCategoryBody = z.infer<typeof updateSubCategorySchema>;
export type SetSubCategoryActiveBody = z.infer<typeof setSubCategoryActiveSchema>;
//# sourceMappingURL=sub-categories.dto.d.ts.map