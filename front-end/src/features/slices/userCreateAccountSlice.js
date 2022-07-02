import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createAccount = createAsyncThunk(
  "CREATE_ACCOUNT_USER",
  async ({ userId, accountName, accountType, accountBalance }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/accounts/create-account/${userId}`,
        {
          accountName,
          accountType,
          accountBalance,
        }
      );
      return data;
    } catch (error) {
      const message =
        error.response && error.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const initialState = {};
const userCreateAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {},
  extraReducers: {
    [createAccount.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createAccount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    [createAccount.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default userCreateAccountSlice.reducer;
