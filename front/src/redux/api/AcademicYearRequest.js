// academicYearRequest.js
import axios from "axios";
import { useSelector } from "react-redux"; // Importez le hook useSelector de react-redux

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getAcademicYears = () => {
  const { token } = JSON.parse(localStorage.getItem("profile"));

  // Ajoutez un intercepteur pour inclure le token d'autorisation dans l'en-tête de la requête
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return API.get("/api/v1/academic-years");
};

export const createAcademicYear=(formData)=>{
    const {token}=JSON.parse(localStorage.getItem("profile"))
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return API.post("/api/v1/academic-years",formData);

}
