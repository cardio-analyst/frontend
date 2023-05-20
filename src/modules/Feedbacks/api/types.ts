import {Feedback, FeedbackDTO} from '../model/Feedback';

export interface GetFeedbackResponse {
    feedbacks: FeedbackDTO[];
    totalPages?: number;
}

export interface FeedBackAllParams {
    markOrdering?: string;
    versionOrdering?: string;
    viewed?: string;
    limit?: number;
    page?: number;
}

export interface FeedbackResponse {
    feedbacks: Feedback[];
    totalPages?: number;
}
