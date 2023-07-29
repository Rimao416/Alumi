import { combineReducers } from "redux";
import authReducer from "./authReducer";
import academicYearReducer from "./academicYearReducer";
export const reducers=combineReducers({authReducer,academicYearReducer})