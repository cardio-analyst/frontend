import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProfileInfo } from './profileCreators';
import { Profile } from '../model/profile';

interface InitialStateProfile {
    isLoading: boolean;
    profile: Profile | null;
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
            action: PayloadAction<Profile>,
        ) => {
            state.isLoading = false;
            state.profile = action.payload;
        },
    },
});
