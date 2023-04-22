import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './userCreators';
import { User } from '../../../model/User';

interface InitialStateProfile {
    isLoading: boolean;
    users: User[];
}

const initialState: InitialStateProfile = {
    isLoading: false,
    users: [],
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
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
            state.isLoading = false;
            state.users = action.payload;
        },
    },
});
