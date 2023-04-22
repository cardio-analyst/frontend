import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInCreator } from './authCreators';
import { InitialStateAuth } from './authTypes';
import { ErrorApp } from 'http/config/types';


const initialState: InitialStateAuth = {
    isLoading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [signInCreator.pending.type]: (state) => {
            state.isLoading = true;
        },
        [signInCreator.fulfilled.type]: (state) => {
            state.error = null;
            state.isLoading = false;
        },
        [signInCreator.rejected.type]: (state, action: PayloadAction<ErrorApp>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});
