import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { logIn } from "./userLogInSlice";

export const approveRegister = createAsyncThunk(
  "APPROVE_REGISTER_USER",
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
const approveUserRegisterSlice = createSlice({
  name: "approveRegister",
  initialState,
  reducers: {},
  extraReducers: {
    [approveRegister.pending]: (state, action) => {
      state.isLoading = true;
    },
    [approveRegister.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [approveRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});
export default approveUserRegisterSlice.reducer;