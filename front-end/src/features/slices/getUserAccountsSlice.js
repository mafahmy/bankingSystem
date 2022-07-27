import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listUserAccounts = createAsyncThunk(
  "LIST_USER_ACCOUNTS",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/users/get-user-accounts", {
        user,
      });
      return data;
    } catch (error) {
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);        
    }
  }
);
const initialState = {
    isLoading: true,
    accounts: []
}
const getUsersAccountSlice = createSlice({
   name: "userAccounts",
   initialState,
   extraReducers: {
    [listUserAccounts.pending]: (state, action) => {
        state.isLoading = true;
    },
    [listUserAccounts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.accounts = action.payload;
    },
    [listUserAccounts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
   }, 
});
export default getUsersAccountSlice.reducer;
