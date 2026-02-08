import { AdminRepository } from "../repositories/admin.repository";
import { AdminSummary } from "../types/admin.types";

export class AdminService {
  private readonly adminRepository = new AdminRepository();

  getSummary(): Promise<AdminSummary> {
    return this.adminRepository.getSummary();
  }
}
