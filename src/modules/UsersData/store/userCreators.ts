import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { userSlice } from './userSlice';
import { cast } from '../../../utils/cast';
import { AxiosError } from 'axios';
import {UsersAllParams} from '../api/types';

export const fetchUsers = createAsyncThunk(
    'user/getAll',
    async (params: UsersAllParams | undefined, { rejectWithValue, dispatch }) => {
        try {
            return await Api.getUsersAll(params);
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(userSlice.actions.fetchCompleted());
        }
    },
);
