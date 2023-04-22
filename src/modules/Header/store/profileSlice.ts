import { User } from 'model/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProfileInfo } from './profileCreators';

interface InitialStateProfile {
    isLoading: boolean;
    profile: User | null;
}

const initialState: InitialStateProfile = {
    isLoading: false,
    profile: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: {
        [getProfileInfo.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getProfileInfo.fulfilled.type]: (
            state,
            action: PayloadAction<User>,
        ) => {
            state.isLoading = false;
            state.profile = action.payload;
        },
    },
});
