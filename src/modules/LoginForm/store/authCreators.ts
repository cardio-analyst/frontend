import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../service/AuthService';
import { SignInCreatorProps } from '../service/types';
import { setCookie } from 'utils/cookie';
import { ErrorApp } from '../../../http/config/types';
import { AxiosError } from 'axios';

export const signInCreator = createAsyncThunk(
    'auth/login',
    async (
        { loginOrEmail, password, onSuccess }: SignInCreatorProps,
        { rejectWithValue },
    ) => {
        try {
            const data = await AuthService.signIn(loginOrEmail, password);
            console.log('data', data);
            setCookie('accessToken', data.accessToken);
            setCookie('refreshToken', data.refreshToken);
            onSuccess();
        } catch (error) {
            if (error instanceof AxiosError) {
                const data = error.response?.data as ErrorApp;
                return rejectWithValue(data);
            }
        }
    },
);

export const refreshTokenCreator = createAsyncThunk(
    'auth/refreshToken',
    async () => {
        const data = await AuthService.refreshToken();
        setCookie('accessToken', data.accessToken);
        setCookie('refreshToken', data.refreshToken);
    },
);
