"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const prisma_1 = __importDefault(require("../../common/prisma"));
class AdminRepository {
    async getSummary() {
        const users = await prisma_1.default.user.count();
        return { users, orders: 0 };
    }
}
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=admin.repository.js.map