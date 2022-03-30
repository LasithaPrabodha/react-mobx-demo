import { LoginRequest } from "../dto/login-request.dto";
import { API_URL } from "../utils/url";
import { BaseService } from "./base.service";

export class AuthService extends BaseService {
    async login(loginRequest: LoginRequest) {
        const response = await this.post(`${API_URL}/auth/login`, loginRequest);

        const parsedResponse = await response.json();

        if (!response.ok) {
            throw new Error(parsedResponse);
        }
        return parsedResponse;
    }
}