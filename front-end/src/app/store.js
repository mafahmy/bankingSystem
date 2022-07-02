import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersListReducer from '../features/slices/usersListSlice';
import userLogInReducer  from '../features/slices/userLogInSlice'
import userRegisterReducer from '../features/slices/userRegisterSlice';
import adminGetUsersRegisterRequestsReducer from '../features/slices/adminGetUsersRegisterRequestsSlice';
import approveUserRegisterReducer from '../features/slices/approveUserRegisterSlice';
import userCreateAccountReducer from '../features/slices/userCreateAccountSlice';
const preloadedState = {};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersListReducer,
    logIn: userLogInReducer,
    register: userRegisterReducer,
    usersRegisterRequests: adminGetUsersRegisterRequestsReducer,
    approveRegister: approveUserRegisterReducer,
    createAccount: userCreateAccountReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadedState,
});
