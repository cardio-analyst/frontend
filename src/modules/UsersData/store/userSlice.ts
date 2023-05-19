import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './userCreators';
import { User } from '../../../model/User';
import { UsersAllResponse } from '../api/types';

interface InitialStateProfile {
    isLoading: boolean;
    users: User[];
    totalPages: number;
}

const initialState: InitialStateProfile = {
    isLoading: false,
    users: [],
    totalPages: 1,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
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
            if (action.payload.totalPages) {
                state.totalPages = action.payload.totalPages;
            }
        },
    },
});
