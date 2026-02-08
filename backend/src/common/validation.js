"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const errors_1 = require("./errors");
const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            next(new errors_1.AppError("Validation failed", 400, "validation_error", result.error.flatten()));
            return;
        }
        req.body = result.data;
        next();
    };
};
exports.validateBody = validateBody;
//# sourceMappingURL=validation.js.map