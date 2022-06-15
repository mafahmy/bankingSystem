import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listUsersReqisterRequests = createAsyncThunk(
  "LIST_USERS_REGISTER_REQUEST",
  async (number, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/users/registerrequests");
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
  registerRequests: [],
};
const adminGetUsersRegisterRequestsSlice = createSlice({
  name: "usersRegisterRequests",
  initialState,
  extraReducers: {
    [listUsersReqisterRequests.pending]: (state, action) => {
      return {
        isLoading: true,
      };
    },
    [listUsersReqisterRequests.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        registerRequests: action.payload,
      };
    },
    [listUsersReqisterRequests.rejected]: (state, action) => {
        return {
            isLoading: false,
            error: action.payload,
        }
    }
  },
});
export default adminGetUsersRegisterRequestsSlice.reducer;
