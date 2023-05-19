import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'modules/LoginForm';
import { userReducer } from 'modules/UsersData';
import { profileReducer } from 'modules/Header';
import { registrationReducer } from 'modules/RegistrationForm';
import { feedbackReducer } from 'modules/Feedbacks';

export const rootReducer = combineReducers({
    authReducer: authReducer,
    userReducer: userReducer,
    profileReducer: profileReducer,
    registrationReducer: registrationReducer,
    feedbackReducer: feedbackReducer,
});
