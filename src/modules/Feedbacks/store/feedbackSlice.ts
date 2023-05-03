import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback } from '../model/Feedback';
import { fetchFeedbacks } from './feedbackCreators';

interface InitialStateProfile {
    isLoading: boolean;
    feedbacks: Feedback[];
}

const initialState: InitialStateProfile = {
    isLoading: false,
    feedbacks: [],
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: {
        [fetchFeedbacks.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchFeedbacks.fulfilled.type]: (
            state,
            action: PayloadAction<Feedback[]>,
        ) => {
            state.isLoading = false;
            state.feedbacks = action.payload;
        },
    },
});
