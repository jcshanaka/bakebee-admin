import { Response } from "express";

import { TypedRequest } from "../../common/types";
import { AuthService } from "./auth.service";
import { LoginBody, RegisterBody } from "./auth.dto";

const authService = new AuthService();

export const login = (req: TypedRequest<{}, {}, LoginBody, {}>, res: Response): void => {
  const result = authService.login();
  res.json(result);
};

export const register = (
  req: TypedRequest<{}, {}, RegisterBody, {}>,
  res: Response
): void => {
  const result = authService.register();
  res.json(result);
};
