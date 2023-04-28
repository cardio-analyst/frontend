import { ErrorApp } from 'http/config/types';
import {SignUpRequest} from '../api/types';

export interface InitialStateRegistration {
    isLoading: boolean;
    error: ErrorApp | null;
}

export interface SignUpCreatorProps {
    request: SignUpRequest,
    onSuccess: () => void;
}
