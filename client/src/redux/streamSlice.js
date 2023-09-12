// streamSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { toast } from "react-hot-toast";

const initialState = {
  streams: [],
  stream: {},
  isLoading: false,
};

export const createStream = createAsyncThunk(
  "/api/stream(post)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/stream", payload, {
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

export const getStreams = createAsyncThunk(
  "/api/stream(get)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/stream", {
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

export const updateStream = createAsyncThunk(
  "/api/stream/:id(update)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `/api/stream/${payload.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteStream = createAsyncThunk(
  "/api/stream/:id(delete)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/stream/${payload.id}`, {
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

const streamSlice = createSlice({
  name: "stream",
  initialState,
  reducers: {
    setStream: (state, {payload}) => {
      state.stream = state.streams.find((e)=>e._id == payload.id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createStream.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createStream.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.streams = payload.streams;
      toast.success(payload.message);
    });
    builder.addCase(createStream.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to add stream");
    });

    builder.addCase(updateStream.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateStream.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.streams = payload.streams;
      toast.success(payload.message)
    });
    builder.addCase(updateStream.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to update streams");
    });

    builder.addCase(getStreams.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStreams.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.streams = payload.streams;
    });
    builder.addCase(getStreams.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to fetch streams");
    });

    builder.addCase(deleteStream.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteStream.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.streams = payload.streams;
      toast.success(payload.message);
    });
    builder.addCase(deleteStream.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to delete stream");
    });
  },
});

export const { setStream } = streamSlice.actions;
export default streamSlice.reducer;