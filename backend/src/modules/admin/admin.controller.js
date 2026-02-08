"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = void 0;
const admin_service_1 = require("./admin.service");
const adminService = new admin_service_1.AdminService();
const getSummary = async (req, res, next) => {
    try {
        const result = await adminService.getSummary();
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getSummary = getSummary;
//# sourceMappingURL=admin.controller.js.map