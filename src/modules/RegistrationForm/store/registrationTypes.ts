import { ErrorApp } from 'http/config/types';
import { SignUpRequest } from '../api/types';

export interface InitialStateRegistration {
    isLoading: boolean;
    error: ErrorApp<RegistrationErrors> | null;
}

export interface SignUpCreatorProps {
    request: SignUpRequest;
    onSuccess: () => void;
}

export enum RegistrationErrors {
    InvalidFirstName = 'InvalidFirstName',
    InvalidLastName = 'InvalidLastName',
    InvalidRegion = 'InvalidRegion',
    InvalidBirthDate = 'InvalidBirthDate',
    InvalidLogin = 'InvalidLogin',
    InvalidEmail = 'InvalidEmail',
    InvalidPassword = 'InvalidPassword',
    InvalidSecretKey = 'InvalidSecretKey',
    LoginAlreadyOccupied = 'LoginAlreadyOccupied',
    EmailAlreadyOccupied = 'EmailAlreadyOccupied',
    WrongSecretKey = 'WrongSecretKey'
}
