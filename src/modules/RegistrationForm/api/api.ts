import { apiPublic } from 'http/api';
import {SignUpRequest} from './types';

export class Api {

    public static async signUp(request: SignUpRequest) {
        return await apiPublic.post<SignUpRequest, unknown>('/auth/signUp', request)
    }
}
