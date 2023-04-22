import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileSlice } from './profileSlice';
import { cast } from 'utils/cast';
import { AxiosError } from 'axios';
import ProfileService from 'modules/Header/service/ProfileService';

export const getProfileInfo = createAsyncThunk(
    'profile/getInfo',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            return await ProfileService.getInfo();
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(profileSlice.actions.fetchCompleted());
        }
    },
);
