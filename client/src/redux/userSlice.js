import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { toast } from "react-hot-toast";

const initialState = {
  users: [],
  isLoading: false,
};
export const getUsers = createAsyncThunk(
  "/api/user/(get)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      (state.isLoading = false), (state.users = payload.users);
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      (state.isLoading = true), toast.error(payload.message);
    });
  },
});

export default userSlice.reducer;
