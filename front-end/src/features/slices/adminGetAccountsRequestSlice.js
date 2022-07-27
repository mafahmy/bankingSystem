import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listAccountsRequest = createAsyncThunk(

  "LIST_ACCOUNT_REQUEST",
  async (number, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/accounts/account-request");
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
  isLoading: false,
  accountRequests: [],
};
const adminGetAccountsRequestSlice = createSlice({
  name: "usersAccountRequests",
  initialState,
  extraReducers: {
    [listAccountsRequest.pending]: (state, action) => {
      return {
        isLoading: true,
      };
    },
    [listAccountsRequest.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        accountRequests: action.payload,
      };
    },
    [listAccountsRequest.rejected]: (state, action) => {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
  },
});
export default adminGetAccountsRequestSlice.reducer;

