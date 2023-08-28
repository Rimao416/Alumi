import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchAcademicPrograms = createAsyncThunk(
  "academicPrograms/fetchAcademicPrograms",
  async () => {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    console.log(token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await API.get("/api/v1/academic-programs");
      console.log(response.data);
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

export const addAcademicPrograms = createAsyncThunk(
  "academicPrograms/addAcademicPrograms",
  async (newAcademicProgram) => {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    console.log(token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await API.post(
        "/api/v1/academic-programs",
        newAcademicProgram
      );
      console.log(response.data);
      toast.success(response.data.message);
      return response.data.academicProgramCreated;
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

const academicProgramsSlice = createSlice({
  name: "academicPrograms",
  initialState: {
    academicProgram: [],
    loading: false,
    error: false,
    errorType: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAcademicPrograms.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAcademicPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.academicProgram = action.payload.data;
        state.error = false;
      })
      .addCase(fetchAcademicPrograms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addAcademicPrograms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAcademicPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.academicProgram = [...state.academicProgram, action.payload];
      })
      .addCase(addAcademicPrograms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default academicProgramsSlice.reducer;
