import { TokenResponse } from "src/global/lib/jwt/dto/token.dto";
import { LoginRequest } from "../presentation/dto/login.dto";
import { RegisterRequest } from "../presentation/dto/register.dto";

export interface AuthInterface {
    login(request: LoginRequest): Promise<TokenResponse>
    register(request: RegisterRequest): Promise<TokenResponse>
    refresh(payload: any): Promise<TokenResponse>
}