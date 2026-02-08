import { Request } from "express";
export type ApiErrorResponse = {
    error: {
        code: string;
        message: string;
        details?: unknown;
    };
};
export type TypedRequest<Params, ResBody, ReqBody, Query> = Request<Params, ResBody, ReqBody, Query>;
//# sourceMappingURL=types.d.ts.map