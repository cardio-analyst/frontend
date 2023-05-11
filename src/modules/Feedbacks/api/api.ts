import { apiPrivate } from 'http/api';
import { FeedbackResponse } from './types';

export class Api {
    public static async getFeedbackAll() {
        return await apiPrivate.get<FeedbackResponse>('/feedback');
    }
}
