import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { API } from "../../config";
import { fetchWithAuthorization } from "../../utils/handleFactory";
API.defaults.withCredentials = true;
export const fetchAcademicSubjects = createAsyncThunk(
  "academicSubjects/fetchAcademicSubjects",
  async () => {
    return fetchWithAuthorization("/api/v1/academic-subjects");
  }
);
let academicSubject = createSlice({
  name: "academicSubjects",
  initialState: {
    academicSubject: [],
    loading: false,
    error: false,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAcademicSubjects.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.status = "idle";
      })
      .addCase(fetchAcademicSubjects.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = false;
        state.academicSubject = action.payload.data;
        state.status = "fulfilled";
      })
      .addCase(fetchAcademicSubjects.rejected, (state) => {
        state.loading = false;
        state.error = true;
        // state.errorType = action.payload;
        state.status = "rejected";
      });
  },
});

export default academicSubject.reducer;
