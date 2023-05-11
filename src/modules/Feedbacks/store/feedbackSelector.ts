import { RootState } from '../../../store';

export const feedbackSelector = (state: RootState) => state.feedbackReducer;
