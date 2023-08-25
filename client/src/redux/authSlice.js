import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { toast } from "react-hot-toast";

export const userLogin = createAsyncThunk(
  "/api/auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", payload);
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userRegisteration = createAsyncThunk(
  "/api/auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/register", payload);
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user || null,
    token: token || null,
    isLoading: false,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", payload.accessToken);
      state.token = payload.accessToken;
      state.user = payload.user;
      toast.success(payload.message);
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
    });

    builder.addCase(userRegisteration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegisteration.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
    });
    builder.addCase(userRegisteration.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
    });
  },
});

export default authSlice.reducer;
export const { logoutUser } = authSlice.actions;
