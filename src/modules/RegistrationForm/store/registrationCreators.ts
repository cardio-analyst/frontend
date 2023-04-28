import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { ErrorApp } from 'http/config/types';
import { AxiosError } from 'axios';
import { SignUpCreatorProps } from './registrationTypes';

export const signUpCreator = createAsyncThunk(
    'register/register',
    async ({ request, onSuccess }: SignUpCreatorProps, { rejectWithValue }) => {
        try {
            await Api.signUp(request);
            onSuccess();
        } catch (error) {
            if (error instanceof AxiosError) {
                const data = error.response?.data as ErrorApp;
                return rejectWithValue(data);
            }
        }
    },
);
