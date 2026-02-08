import { NextFunction, Response } from "express";
import { TypedRequest } from "../../../common/types";
import { LoginBody, RegisterBody } from "../dtos/auth.dto";
export declare const login: (req: TypedRequest<{}, {}, LoginBody, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const register: (req: TypedRequest<{}, {}, RegisterBody, {}>, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map