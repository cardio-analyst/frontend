import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback } from '../model/Feedback';
import {changeReadStatus, fetchFeedbacks} from './feedbackCreators';

interface InitialStateFeedback {
    isLoading: boolean;
    feedbacks: Feedback[];
    isChangingReadStatus: boolean;
}

const initialState: InitialStateFeedback = {
    isLoading: false,
    feedbacks: [],
    isChangingReadStatus: false,
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
        changedReadStatus: (state) => {
            state.isChangingReadStatus = false;
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
            state.feedbacks = action.payload;
        },
        [changeReadStatus.pending.type]: (state) => {
            state.isChangingReadStatus = true;
        },
    },
});
