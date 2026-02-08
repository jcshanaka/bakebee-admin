"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const auth_service_1 = require("../services/auth.service");
const authService = new auth_service_1.AuthService();
const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.register = register;
//# sourceMappingURL=auth.controller.js.map