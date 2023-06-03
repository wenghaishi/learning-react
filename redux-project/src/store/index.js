import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});



export default store;
