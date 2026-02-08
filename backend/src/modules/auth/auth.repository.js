"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prisma_1 = __importDefault(require("../../common/prisma"));
class AuthRepository {
    getUserByEmail(email) {
        return prisma_1.default.user.findUnique({ where: { email } });
    }
    createUser(data) {
        return prisma_1.default.user.create({ data });
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map