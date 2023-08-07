import { combineReducers } from "redux";
import authReducer from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
// import academicYearReducer from "./academicYearReducer";
// export const reducers = combineReducers({ auth: authReducer });
// export const store = configureStore({ auth: authReducer });
export const store = configureStore({
    reducer: {
      auth: authReducer
    },
  })
  