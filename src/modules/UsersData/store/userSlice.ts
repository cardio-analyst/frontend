import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './userCreators';
import { User } from '../../../model/User';
import { UsersAllResponse } from '../api/types';

interface InitialStateProfile {
    isLoading: boolean;
    users: User[];
    totalPages: number;
    page: number;
    region: undefined | string,
    birthDateFrom: undefined | string,
    birthDateTo: undefined | string,
}

const initialState: InitialStateProfile = {
    isLoading: false,
    users: [],
    totalPages: 1,
    page: 1,
    region: undefined,
    birthDateFrom: undefined,
    birthDateTo: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
        changedRegion: (state, action: PayloadAction<string | undefined>) => {
            state.region = action.payload;
        },
        changedBirthDateFrom: (state, action: PayloadAction<string | undefined>) => {
            state.birthDateFrom = action.payload;
        },
        changedBirthDateTo: (state, action: PayloadAction<string | undefined>) => {
            state.birthDateTo = action.payload;
        },
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (
            state,
            action: PayloadAction<UsersAllResponse>,
        ) => {
            state.users = action.payload.users;

            if (!state.users.length) {
                state.page = 1;
                state.totalPages = 1;
            }

            if (action.payload.totalPages) {
                state.totalPages = action.payload.totalPages;
            }
        },
    },
});
