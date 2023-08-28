import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const API = axios.create({ baseURL: "http://localhost:5000" });
API.defaults.withCredentials = true;
export const fetchClassLevels = createAsyncThunk(
  "classLevels/fetchClassLevels",
  async () => {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    console.log(token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await API.get("/api/v1/class-levels");
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

export const addClassLevel = createAsyncThunk(
  "classLevels/addClassLevel",
  async (newClassLevel) => {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    console.log(token);
    // console.log(newClassLevel);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await API.post("/api/v1/class-levels", {
        name: newClassLevel,
      });
      console.log(response.data);
      toast.success(response.data.message);
      return response.data.classCreated;
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
const classLevelSlice = createSlice({
  name: "classLevel",
  initialState: {
    classLevel: [],
    loading: false,
    error: false,
    errorType: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassLevels.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchClassLevels.fulfilled, (state, action) => {
        state.loading = false;
        state.classLevel = action.payload.data;
        state.error = false;
      })
      .addCase(fetchClassLevels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addClassLevel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addClassLevel.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.classLevel = [...state.classLevel, action.payload];
        // state.academicYear.push(action.payload.academicYearCreated);
      })
      .addCase(addClassLevel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default classLevelSlice.reducer;
