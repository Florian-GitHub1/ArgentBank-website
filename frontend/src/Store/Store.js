import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Reducers/AuthenticationReducer.js';
import { userReducer } from './Reducers/UserReducer.js';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

export default store;
