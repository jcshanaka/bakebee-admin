"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const notFoundHandler = (req, res) => {
    res.status(404).json({
        error: {
            code: "not_found",
            message: "Not Found",
        },
    });
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=not-found.js.map