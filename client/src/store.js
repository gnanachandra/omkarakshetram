import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice"
import eventReducer from "./redux/eventSlice"
import streamReducer from "./redux/streamSlice"
import userReducer from "./redux/userSlice";

const store = configureStore({
  reducer: {
    auth : authReducer,
    event : eventReducer,
    stream:streamReducer
    user: userReducer,
  },
});

export default store;