import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const sessionReducer = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		loginUser: (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
		},
		saveUser: (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
		},
		deleteUser: (state) => {
			state.user = undefined;
			state.isLogged = false;
		},
	},
});

export default sessionReducer.reducer;

export const { loginUser, saveUser, deleteUser } = sessionReducer.actions;
