import prisma from "../../../common/prisma";
import { AdminSummary } from "../types/admin.types";

export class AdminRepository {
  async getSummary(): Promise<AdminSummary> {
    const users = await prisma.user.count();
    return { users, orders: 0 };
  }
}
