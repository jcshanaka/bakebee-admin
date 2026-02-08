"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const errors_1 = require("../common/errors");
const errorHandler = (err, req, res, next) => {
    if (err instanceof errors_1.AppError) {
        res.status(err.statusCode).json({
            error: {
                code: err.code,
                message: err.message,
                details: err.details,
            },
        });
        return;
    }
    if (err instanceof zod_1.ZodError) {
        res.status(400).json({
            error: {
                code: "validation_error",
                message: "Validation failed",
                details: err.flatten(),
            },
        });
        return;
    }
    console.error(err.stack);
    res.status(500).json({
        error: {
            code: "internal_error",
            message: "Internal Server Error",
        },
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map