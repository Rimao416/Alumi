import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchAcademicYears = createAsyncThunk(
  "academicYears/fetchAcademicYears",
  async () => {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    console.log(token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await API.get("/api/v1/academic-years");
      console.log(response.data.data);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message ||
          "Une erreur est survenue lors de la connexion."
      );
      throw error.response.data;
    }
  }
);

// Action asynchrone pour ajouter une année académique
export const addAcademicYear = createAsyncThunk(
  "academicYears/addAcademicYear",
  async (newAcademicYear) => {
    try {
      const response = await API.post(
        "/api/v1/academic-years",
        newAcademicYear
      );
      console.log(response);
      return response.data.academicYearCreated;
    } catch (error) {
      console.log(error.response.data);
      toast.error(
        error.response.data.message ||
          "Une erreur est survenue lors de la connexion."
      );
      throw error.response.data;
    }
  }
);

let academicYearsSlice = createSlice({
  name: "academicYears",
  initialState: {
    academicYear: [],
    loading: false,
    error: false,
    errorType: null,
    status: "idle",
  },
  reducers: {
    openModal(state) {
      state.status = "idle";
    },
    closeModal(state) {
      state.status = "fulfilled";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAcademicYears.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAcademicYears.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.academicYear = action.payload.data;
      })
      .addCase(fetchAcademicYears.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addAcademicYear.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAcademicYear.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.academicYear = [...state.academicYear, action.payload];
        // state.academicYear.push(action.payload.academicYearCreated);
      })
      .addCase(addAcademicYear.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { openModal, closeModal } = academicYearsSlice.actions;
export default academicYearsSlice.reducer;
