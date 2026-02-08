import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { AppError } from "../common/errors";
import { ApiErrorResponse } from "../common/types";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response<ApiErrorResponse>,
  next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
      },
    });
    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({
      error: {
        code: "validation_error",
        message: "Validation failed",
        details: err.flatten(),
      },
    });
    return;
  }

  console.error(err.stack);
  res.status(500).json({
    error: {
      code: "internal_error",
      message: "Internal Server Error",
    },
  });
};
