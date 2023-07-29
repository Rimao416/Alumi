import * as AcademicYearApi from "../api/AcademicYearRequest.js";
import { toast } from "react-toastify";
export const getAcademicYears = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACADEMIC_YEAR_START" });
    const { data } = await AcademicYearApi.getAcademicYears();
    console.log(data);
    dispatch({ type: "GET_ACADEMIC_YEAR_SUCCESS", data });

    // AJOUT
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: "GET_ACADEMIC_YEAR_FAIL" });
  }
};

export const createAcademicYear = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_ACADEMIC_YEAR_START" });
    const { data } = await AcademicYearApi.createAcademicYear(formData);
    dispatch({ type: "CREATE_ACADEMIC_YEAR_SUCCESS", data });
    toast.success("Année académique ajoutée avec succès !, profitez de votre nouvelle année")
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: "CREATE_ACADEMIC_YEAR_FAIL" });
  }
};
