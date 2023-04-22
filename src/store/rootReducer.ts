import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'modules/LoginForm';
import { userReducer } from 'modules/UsersTable';
import { profileReducer } from 'modules/Header';

export const rootReducer = combineReducers({
    authReducer: authReducer,
    userReducer: userReducer,
    profileReducer: profileReducer,
});
