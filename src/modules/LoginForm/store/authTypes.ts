import { ErrorApp } from 'http/config/types';

export interface InitialStateAuth {
    isLoading: boolean;
    error: ErrorApp | null;
}
