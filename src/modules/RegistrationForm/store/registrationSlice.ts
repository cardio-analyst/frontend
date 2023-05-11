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
    reducers: {},
    extraReducers: {
        [signUpCreator.pending.type]: (state) => {
            state.isLoading = true;
        },
        [signUpCreator.fulfilled.type]: (state) => {
            state.error = null;
            state.isLoading = false;
        },
        [signUpCreator.rejected.type]: (
            state,
            action: PayloadAction<ErrorApp<RegistrationErrors>>,
        ) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});
