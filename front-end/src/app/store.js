import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersListReducer from '../features/slices/usersListSlice';
import userLogInReducer  from '../features/slices/userLogInSlice'
import userRegisterReducer from '../features/slices/userRegisterSlice';
const preloadedState = {};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersListReducer,
    logIn: userLogInReducer,
    register: userRegisterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadedState,
});
