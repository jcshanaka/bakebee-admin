import { AdminRepository } from "./admin.repository";

export class AdminService {
  private readonly adminRepository = new AdminRepository();

  getSummary(): { message: string } {
    return this.adminRepository.getSummary();
  }
}
