import { NextFunction, Response } from "express";
import { TypedRequest } from "../../../common/types";
import { CreateCategoryBody, SetCategoryActiveBody, UpdateCategoryBody } from "../dtos/categories.dto";
export declare const listCategories: (req: TypedRequest<{}, {}, {}, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const getCategory: (req: TypedRequest<{
    id: string;
}, {}, {}, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const createCategory: (req: TypedRequest<{}, {}, CreateCategoryBody, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const updateCategory: (req: TypedRequest<{
    id: string;
}, {}, UpdateCategoryBody, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const setCategoryActive: (req: TypedRequest<{
    id: string;
}, {}, SetCategoryActiveBody, {}>, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=categories.controller.d.ts.map