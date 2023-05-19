import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorApp } from 'http/config/types';
import { signUpCreator } from './registrationCreators';
import {
    InitialStateRegistration,
    RegistrationErrors,
} from './registrationTypes';

const initialState: InitialStateRegistration = {
    isLoading: false,
    error: null,
};

export const registrationSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        signUpCompleted: (state) => {
            state.isLoading = false;
        }
    },
    extraReducers: {
        [signUpCreator.pending.type]: (state) => {
            state.isLoading = true;
        },
        [signUpCreator.fulfilled.type]: (state) => {
            state.error = null;
        },
        [signUpCreator.rejected.type]: (
            state,
            action: PayloadAction<ErrorApp<RegistrationErrors>>,
        ) => {
            state.error = action.payload;
        },
    },
});
