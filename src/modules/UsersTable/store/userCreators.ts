import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { userSlice } from './userSlice';
import { cast } from '../../../utils/cast';
import { AxiosError } from 'axios';

export const fetchUsers = createAsyncThunk(
    'user/getAll',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const users = await Api.getUsersAll();
            return users || [];
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(userSlice.actions.fetchCompleted());
        }
    },
);
