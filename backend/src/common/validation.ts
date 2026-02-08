import { RequestHandler } from "express";
import { ZodSchema } from "zod";

import { AppError } from "./errors";

export const validateBody = <T>(schema: ZodSchema<T>): RequestHandler => {
  return (req, res, next): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      next(
        new AppError("Validation failed", 400, "validation_error", result.error.flatten())
      );
      return;
    }

    req.body = result.data;
    next();
  };
};
