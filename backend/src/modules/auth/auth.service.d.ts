import { LoginBody, RegisterBody } from "./auth.dto";
import { AuthTokenResponse } from "./auth.types";
export declare class AuthService {
    private readonly authRepository;
    login(body: LoginBody): Promise<AuthTokenResponse>;
    register(body: RegisterBody): Promise<AuthTokenResponse>;
    private signTokens;
}
//# sourceMappingURL=auth.service.d.ts.map