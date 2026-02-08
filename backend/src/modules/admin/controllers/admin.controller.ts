import { NextFunction, Request, Response } from "express";

import { AdminService } from "../services/admin.service";

const adminService = new AdminService();

export const getSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await adminService.getSummary();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
