import { AuthRepository } from "./auth.repository";

export class AuthService {
  private readonly authRepository = new AuthRepository();

  login(): { message: string } {
    return this.authRepository.login();
  }

  register(): { message: string } {
    return this.authRepository.register();
  }
}
