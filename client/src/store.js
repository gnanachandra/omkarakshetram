import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import eventReducer from "./redux/eventSlice";
import userReducer from "./redux/userSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer,
    user: userReducer,
  },
});

export default store;
