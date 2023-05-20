import { apiPrivate } from 'http/api';
import {FeedBackAllParams, GetFeedbackResponse, FeedbackResponse} from './types';
import {Feedback} from '../model/Feedback';

export class Api {
    public static async getFeedbackAll(params?: FeedBackAllParams): Promise<FeedbackResponse | undefined> {
        const data = await apiPrivate.get<GetFeedbackResponse>('/feedback', {
            params,
        });

        if (data) {
            return {
                feedbacks: data.feedbacks.map((item) => new Feedback(item)),
                totalPages: data.totalPages
            }
        }
        return undefined;
    }

    public static async changeViewStatus(feedbackId: string) {
        return await apiPrivate.put<never, GetFeedbackResponse>(
            `/feedback/${feedbackId}`,
        );
    }
}
