import { NextFunction, Response } from "express";
import { TypedRequest } from "../../../common/types";
import { CreateSubCategoryBody, SetSubCategoryActiveBody, UpdateSubCategoryBody } from "../dtos/sub-categories.dto";
export declare const listSubCategories: (req: TypedRequest<{}, {}, {}, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const getSubCategory: (req: TypedRequest<{
    id: string;
}, {}, {}, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const createSubCategory: (req: TypedRequest<{}, {}, CreateSubCategoryBody, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const updateSubCategory: (req: TypedRequest<{
    id: string;
}, {}, UpdateSubCategoryBody, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const setSubCategoryActive: (req: TypedRequest<{
    id: string;
}, {}, SetSubCategoryActiveBody, {}>, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=sub-categories.controller.d.ts.map