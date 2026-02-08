"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_repository_1 = require("./auth.repository");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../../common/errors");
class AuthService {
    authRepository = new auth_repository_1.AuthRepository();
    async login(body) {
        const user = await this.authRepository.getUserByEmail(body.email);
        if (!user) {
            throw new errors_1.AppError("Invalid credentials", 401, "unauthorized");
        }
        const passwordOk = await bcryptjs_1.default.compare(body.password, user.passwordHash);
        if (!passwordOk) {
            throw new errors_1.AppError("Invalid credentials", 401, "unauthorized");
        }
        return this.signTokens(user.id, user.email);
    }
    async register(body) {
        const existing = await this.authRepository.getUserByEmail(body.email);
        if (existing) {
            throw new errors_1.AppError("Email already registered", 409, "conflict");
        }
        const passwordHash = await bcryptjs_1.default.hash(body.password, 10);
        const user = await this.authRepository.createUser({
            name: body.name,
            email: body.email,
            passwordHash,
        });
        return this.signTokens(user.id, user.email);
    }
    signTokens(userId, email) {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new errors_1.AppError("JWT secret not configured", 500, "internal_error");
        }
        const payload = { sub: userId, email };
        return {
            accessToken: jsonwebtoken_1.default.sign(payload, secret, { expiresIn: "15m" }),
            refreshToken: jsonwebtoken_1.default.sign(payload, secret, { expiresIn: "7d" }),
        };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map