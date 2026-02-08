export type ErrorCode = "validation_error" | "not_found" | "unauthorized" | "forbidden" | "conflict" | "internal_error";
export declare class AppError extends Error {
    readonly statusCode: number;
    readonly code: ErrorCode;
    readonly details?: unknown;
    constructor(message: string, statusCode: number, code: ErrorCode, details?: unknown);
}
//# sourceMappingURL=errors.d.ts.map