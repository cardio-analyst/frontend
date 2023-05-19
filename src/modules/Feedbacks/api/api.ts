import { apiPrivate } from 'http/api';
import { FeedbackResponse } from './types';

export class Api {
    public static async getFeedbackAll() {
        return await apiPrivate.get<FeedbackResponse>('/feedback');
    }

    public static async changeViewStatus(feedbackId: string) {
        return await apiPrivate.put<never, FeedbackResponse>(`/feedback/${feedbackId}`);
    }
}
