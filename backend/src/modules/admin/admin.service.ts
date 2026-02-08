import { AdminRepository } from "./admin.repository";
import { AdminSummary } from "./admin.types";

export class AdminService {
  private readonly adminRepository = new AdminRepository();

  getSummary(): Promise<AdminSummary> {
    return this.adminRepository.getSummary();
  }
}
