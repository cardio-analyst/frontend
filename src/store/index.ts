import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export { store }
