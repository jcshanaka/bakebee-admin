export class AuthRepository {
  login(): { message: string } {
    return { message: "login ok" };
  }

  register(): { message: string } {
    return { message: "register ok" };
  }
}
