import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api/api';
import { cast } from '../../../utils/cast';
import { AxiosError } from 'axios';
import { feedbackSlice } from './feedbackSlice';

export const fetchFeedbacks = createAsyncThunk(
    'feedback/getAll',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const feedbackResponse = await Api.getFeedbackAll();
            return feedbackResponse.feedbacks;
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(feedbackSlice.actions.fetchCompleted());
        }
    },
);

export const changeReadStatus = createAsyncThunk(
    'feedback/changeReadStatus',
    async (feedbackId: string, { rejectWithValue, dispatch }) => {
        try {
            console.log('TESTTEST');
            // TODO add method for change read status.
            setTimeout(() => {
                return Promise.resolve();
            }, 5000)
        } catch (error) {
            return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(feedbackSlice.actions.changedReadStatus());
        }
    },
);

