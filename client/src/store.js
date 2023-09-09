import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice"
import eventReducer from "./redux/eventSlice"
const store = configureStore({
  reducer: {
    auth : authReducer,
    event : eventReducer
  },
});

export default store;