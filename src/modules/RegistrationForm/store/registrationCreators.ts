import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { ErrorApp } from 'http/config/types';
import { AxiosError } from 'axios';
import { SignUpCreatorProps } from './registrationTypes';
import {registrationSlice} from './registrationSlice';

export const signUpCreator = createAsyncThunk(
    'register/register',
    async ({ request, onSuccess }: SignUpCreatorProps, { rejectWithValue, dispatch }) => {
        try {
            await Api.signUp(request);
            onSuccess();
        } catch (error) {
            if (error instanceof AxiosError) {
                const data = error.response?.data as ErrorApp;
                return rejectWithValue(data);
            }
        } finally {
            dispatch(registrationSlice.actions.signUpCompleted())
        }
    },
);
