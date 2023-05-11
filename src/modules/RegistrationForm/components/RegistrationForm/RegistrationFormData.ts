import {RegistrationErrors} from '../../store/registrationTypes';

export const getNameFieldByError = (error: RegistrationErrors) => {
    switch (error) {
        case RegistrationErrors.InvalidBirthDate:
            return 'birthDate';
        case RegistrationErrors.EmailAlreadyOccupied:
        case RegistrationErrors.InvalidEmail:
            return 'email';
        case RegistrationErrors.InvalidRegion:
            return 'region';
        case RegistrationErrors.InvalidLastName:
            return 'lastName';
        case RegistrationErrors.InvalidFirstName:
            return 'firstName';
        case RegistrationErrors.InvalidLogin:
        case RegistrationErrors.LoginAlreadyOccupied:
            return 'login';
        case RegistrationErrors.InvalidPassword:
            return 'password';
        case RegistrationErrors.InvalidSecretKey:
        case RegistrationErrors.WrongSecretKey:
            return 'secretKey'
        default:
            return '';
    }
}

export const getStepFormByError = (error: RegistrationErrors) => {
    switch (error) {
        case RegistrationErrors.EmailAlreadyOccupied:
        case RegistrationErrors.InvalidEmail:
        case RegistrationErrors.InvalidLogin:
        case RegistrationErrors.LoginAlreadyOccupied:
        case RegistrationErrors.InvalidPassword:
            return 0;
        case RegistrationErrors.InvalidBirthDate:
        case RegistrationErrors.InvalidRegion:
        case RegistrationErrors.InvalidLastName:
        case RegistrationErrors.InvalidFirstName:
            return 1;
        case RegistrationErrors.InvalidSecretKey:
        case RegistrationErrors.WrongSecretKey:
            return 2;
        default:
            return 2;
    }
}
