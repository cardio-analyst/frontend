import { apiPublic } from 'http/api';
import { RefreshTokenRequest, SignInRequest, TokenResponse } from './types';
import { getCookie } from 'utils/cookie';

export class AuthService {

    public static async signIn(loginOrEmail: string, password: string) {
        return await apiPublic.post<SignInRequest, TokenResponse>('auth/signIn', { loginOrEmail, password })
    }

    public static async refreshToken() {
        const refreshToken = getCookie('refreshToken')
        return apiPublic.post<RefreshTokenRequest, TokenResponse>('/auth/refreshTokens', {refreshToken})
    }
}
