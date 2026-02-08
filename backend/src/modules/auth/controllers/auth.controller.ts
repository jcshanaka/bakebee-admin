import { NextFunction, Response } from "express";

import { TypedRequest } from "../../../common/types";
import { AuthService } from "../services/auth.service";
import { LoginBody, RegisterBody } from "../dtos/auth.dto";

const authService = new AuthService();

export const login = async (
  req: TypedRequest<{}, {}, LoginBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const register = async (
  req: TypedRequest<{}, {}, RegisterBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await authService.register(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
