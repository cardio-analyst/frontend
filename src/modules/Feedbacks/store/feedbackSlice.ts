import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback } from '../model/Feedback';
import { changeViewStatus, fetchFeedbacks } from './feedbackCreators';
import { ViewStatusPayload } from './feedbackType';
import { FeedbackResponse } from '../api/types';

interface InitialStateFeedback {
    isLoading: boolean;
    feedbacks: Feedback[];
    isLoadingViewStatus: boolean;
    totalPages: number;
    page: number;
    viewed: undefined | string,
    versionOrdering: undefined | string,
    markOrdering: undefined | string,
}

const initialState: InitialStateFeedback = {
    isLoading: false,
    feedbacks: [],
    isLoadingViewStatus: false,
    totalPages: 1,
    page: 1,
    viewed: undefined,
    versionOrdering: undefined,
    markOrdering: undefined,
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
        changedViewed: (state, action: PayloadAction<string>) => {
            state.viewed = action.payload;
        },
        changedVersionOrdering: (state, action: PayloadAction<string>) => {
            state.versionOrdering = action.payload;
        },
        changedMarkOrdering: (state, action: PayloadAction<string>) => {
            state.markOrdering = action.payload;
        },
    },
    extraReducers: {
        [fetchFeedbacks.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchFeedbacks.fulfilled.type]: (
            state,
            action: PayloadAction<FeedbackResponse>,
        ) => {
            state.feedbacks = action.payload.feedbacks;

            if (!state.feedbacks.length) {
                state.page = 1;
                state.totalPages = 1;
            }

            if (action.payload.totalPages) {
                state.totalPages = action.payload.totalPages;
            }
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
