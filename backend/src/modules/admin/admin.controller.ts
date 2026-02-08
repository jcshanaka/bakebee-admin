import { Request, Response } from "express";

import { AdminService } from "./admin.service";

const adminService = new AdminService();

export const getSummary = (req: Request, res: Response): void => {
  const result = adminService.getSummary();
  res.json(result);
};
