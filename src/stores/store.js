import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../stores/sessionReducer/store';

export const store = configureStore({
	reducer: { sessionReducer },
});
