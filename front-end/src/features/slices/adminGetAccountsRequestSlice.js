import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listAccountsRequest = createAsyncThunk(
    "LIST_ACCOUNT_REQUEST",
    async (number, thunkAPI) => {
        try {
            const { data } = await axios.get("/api/account-request");
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
