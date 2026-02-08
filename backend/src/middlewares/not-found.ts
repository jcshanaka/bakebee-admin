import { Request, Response } from "express";

import { ApiErrorResponse } from "../common/types";

export const notFoundHandler = (
  req: Request,
  res: Response<ApiErrorResponse>
): void => {
  res.status(404).json({
    error: {
      code: "not_found",
      message: "Not Found",
    },
  });
};
