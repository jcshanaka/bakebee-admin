"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const admin_repository_1 = require("../repositories/admin.repository");
class AdminService {
    adminRepository = new admin_repository_1.AdminRepository();
    getSummary() {
        return this.adminRepository.getSummary();
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map