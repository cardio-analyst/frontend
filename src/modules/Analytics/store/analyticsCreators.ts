import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { analyticsSlice } from './analyticsSlice';
import { cast } from '../../../utils/cast';
import { AxiosError } from 'axios';

export const fetchAnalytics = createAsyncThunk(
    'analytics/getAll',
    async (
        region: string | undefined,
        { rejectWithValue, dispatch },
    ) => {
        try {
            return await Api.getStatisticsAll(region);
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(analyticsSlice.actions.fetchCompleted());
        }
    },
);
