import axios from "axios"
const API=axios.create({baseURL:"http://localhost:5000"})
// const API = axios.create({ baseURL: process.env.BACK_END_ADRESS });
export const logIn=(formData)=>API.post("/api/v1/admins/login",formData)