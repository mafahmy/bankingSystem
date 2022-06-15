import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

export const logIn = createAsyncThunk(
  "LOGIN_USER",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

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
export const logout = createAsyncThunk("USER_LOGOUT", () => {
  localStorage.removeItem("userInfo");
})
const initialState = userInfo
  ? {
      isLoggedIn: true,
      userInfo,
    }
  : { isLoggedIn: false, userInfo: null };
const userLogInSlice = createSlice({
  name: "logIn",
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.pending]: (state, action) => {
      return {
        isLoading: true,
      };
    },
    [logIn.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        isLoggedIn: true,
        userInfo: action.payload,
      };
    },
    [logIn.rejected]: (state, action) => {
      return {
        isLoading: false,
        isError: true,
        isLoggedIn: false,
        error: action.payload,
      };
    },
    [logout.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        userInfo: null,
        isLoggedIn: false
      };
    },
  },
});
export default userLogInSlice.reducer;
