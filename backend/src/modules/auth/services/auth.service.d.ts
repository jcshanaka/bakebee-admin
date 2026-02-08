import { LoginBody, RegisterBody } from "../dtos/auth.dto";
import { AuthTokenResponse } from "../types/auth.types";
export declare class AuthService {
    private readonly authRepository;
    login(body: LoginBody): Promise<AuthTokenResponse>;
    register(body: RegisterBody): Promise<AuthTokenResponse>;
    private signTokens;
}
//# sourceMappingURL=auth.service.d.ts.map