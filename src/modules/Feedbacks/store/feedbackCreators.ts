import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { cast } from '../../../utils/cast';
import { AxiosError } from 'axios';
import { feedbackSlice } from './feedbackSlice';
import { FeedBackAllParams } from '../api/types';

export const fetchFeedbacks = createAsyncThunk(
    'feedback/getAll',
    async (
        params: FeedBackAllParams | undefined,
        { rejectWithValue, dispatch },
    ) => {
        try {
            return await Api.getFeedbackAll(params);
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(feedbackSlice.actions.fetchCompleted());
        }
    },
);

export const changeViewStatus = createAsyncThunk(
    'feedback/changeReadStatus',
    async (feedbackId: number, { rejectWithValue, dispatch }) => {
        try {
            await Api.changeViewStatus(String(feedbackId));
            return { feedbackId };
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(feedbackSlice.actions.changedReadStatus());
        }
    },
);
