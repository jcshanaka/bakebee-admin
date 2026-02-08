import { NextFunction, Request, Response } from "express";
import { ApiErrorResponse } from "../common/types";
export declare const errorHandler: (err: Error, req: Request, res: Response<ApiErrorResponse>, next: NextFunction) => void;
//# sourceMappingURL=error-handler.d.ts.map