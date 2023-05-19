import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback } from '../model/Feedback';
import { changeViewStatus, fetchFeedbacks } from './feedbackCreators';
import { ViewStatusPayload } from './feedbackType';

interface InitialStateFeedback {
    isLoading: boolean;
    feedbacks: Feedback[];
    isLoadingViewStatus: boolean;
}

const initialState: InitialStateFeedback = {
    isLoading: false,
    feedbacks: [],
    isLoadingViewStatus: false,
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
        changedReadStatus: (state) => {
            state.isLoadingViewStatus = false;
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
        [changeViewStatus.pending.type]: (state) => {
            state.isLoadingViewStatus = true;
        },
        [changeViewStatus.fulfilled.type]: (
            state,
            action: PayloadAction<ViewStatusPayload>,
        ) => {
            state.feedbacks = state.feedbacks.map((feedback) => {
                if (action.payload.feedbackId === feedback.id) {
                    return new Feedback({
                        ...feedback,
                        viewed: !feedback.viewed,
                    });
                }
                return feedback;
            });
        },
    },
});
