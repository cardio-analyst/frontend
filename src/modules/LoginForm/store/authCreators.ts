import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { SignInCreatorProps } from '../api/types';
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
            const data = await Api.signIn(loginOrEmail, password);

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
