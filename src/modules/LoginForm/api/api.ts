import { apiPublic } from 'http/api';
import { SignInRequest, TokenResponse } from './types';

export class Api {

    public static async signIn(loginOrEmail: string, password: string) {
        return await apiPublic.post<SignInRequest, TokenResponse>('auth/signIn', { loginOrEmail, password })
    }
}
