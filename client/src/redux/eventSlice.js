import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { toast } from "react-hot-toast";

const initialState = {
  events: [],
  upcomingEvents : [],
  pastEvents : [],
  event: {},
  isLoading: false,
};

//create
export const addEvent = createAsyncThunk(
  "/api/event(post)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/event", payload, {
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

//read
export const getEvents = createAsyncThunk(
  "/api/event(get)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/event", {
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

//update
export const updateEvent = createAsyncThunk(
  "/api/event/:id(update)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/event/${payload.id}`, payload, {
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

//delete
export const deleteEvent = createAsyncThunk(
  "/api/event/:id(delete)",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/event/${payload.id}`, {
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

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent: (state, { payload }) => {
      console.log(payload);
      console.log(state.events);
      state.event = state.events.find((e) => e._id == payload.id);
      console.log(state.event);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addEvent.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
      toast.success(payload.message);
    });
    builder.addCase(addEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to add event");
    });

    builder.addCase(updateEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateEvent.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
      toast.success(payload.message);
    });
    builder.addCase(updateEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to update event");
    });

    builder.addCase(getEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
      // state.upcomingEvents = state.events.filter(
      //   (event) => event.date >= new Date() ? event : ""
      // );
      // state.pastEvents = state.events.filter((event) => event.date < new Date());
      // console.log(state.upcomingEvents);
      
    });
    builder.addCase(getEvents.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to fetch events");
    });

    builder.addCase(deleteEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteEvent.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
      toast.success(payload.message)
    });
    builder.addCase(deleteEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message || "Unable to delete event");
    });
  },
});

export const { setEvent } = eventSlice.actions;
export default eventSlice.reducer;
