import { action, makeObservable, observable } from "mobx";
import { LoginRequest } from "../dto/login-request.dto";
import { AuthService } from "../services/auth.service";

export interface IAuthStore {
    authenticated: boolean;
    getAccessToken(): string | null;
    login(loginRequest: LoginRequest): void;
    signOut(): void;
}

export class AuthStore implements IAuthStore {
    @observable authenticated = false;

    constructor(private readonly authService: AuthService) {
        makeObservable(this);
        this.authenticated = !!this.getAccessToken();
    }

    @action async login(loginRequest: LoginRequest) {
        try {
            const tokenPayloadDto = await this.authService.login(loginRequest);
            localStorage.setItem("access_token", tokenPayloadDto.access_token);
            this.setAuthenticated(true);

            return true;
        } catch (err) {
            this.setAuthenticated(false);

            return null;
        }
    }

    private setAuthenticated(authenticated: boolean) {
        this.authenticated = authenticated;
    }

    @action getAccessToken() {
        return localStorage.getItem("access_token");
    }

    @action signOut() {
        localStorage.removeItem("access_token");
        this.setAuthenticated(false)
    }


}