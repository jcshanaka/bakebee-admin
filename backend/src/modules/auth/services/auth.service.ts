import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { AppError } from "../../../common/errors";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginBody, RegisterBody } from "../dtos/auth.dto";
import { AuthTokenResponse } from "../types/auth.types";

export class AuthService {
  private readonly authRepository = new AuthRepository();

  async login(body: LoginBody): Promise<AuthTokenResponse> {
    const user = await this.authRepository.getUserByEmail(body.email);
    if (!user) {
      throw new AppError("Invalid credentials", 401, "unauthorized");
    }

    const passwordOk = await bcrypt.compare(body.password, user.passwordHash);
    if (!passwordOk) {
      throw new AppError("Invalid credentials", 401, "unauthorized");
    }

    return this.signTokens(user.id, user.email);
  }

  async register(body: RegisterBody): Promise<AuthTokenResponse> {
    const existing = await this.authRepository.getUserByEmail(body.email);
    if (existing) {
      throw new AppError("Email already registered", 409, "conflict");
    }

    const passwordHash = await bcrypt.hash(body.password, 10);
    const user = await this.authRepository.createUser({
      name: body.name,
      email: body.email,
      passwordHash,
    });

    return this.signTokens(user.id, user.email);
  }

  private signTokens(userId: number, email: string): AuthTokenResponse {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError("JWT secret not configured", 500, "internal_error");
    }

    const payload = { sub: userId, email };
    return {
      accessToken: jwt.sign(payload, secret, { expiresIn: "15m" }),
      refreshToken: jwt.sign(payload, secret, { expiresIn: "7d" }),
    };
  }
}
