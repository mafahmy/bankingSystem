import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { logIn } from "./userLogInSlice";

export const register = createAsyncThunk(
  "REGISTER_USER",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "/api/users/register",
        {
          name,
          email,
          password
        }
      );
      await thunkAPI.dispatch(logIn({ email, password }));
      return data;
    } catch(error){
      const message =
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
         
         return thunkAPI.rejectWithValue(message);
    }
  }
);
const initialState = {};
const userRegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});
export default userRegisterSlice.reducer;
