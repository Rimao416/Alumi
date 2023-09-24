import { API } from "../config";

API.defaults.withCredentials = true;
export const fetchWithAuthorization = async (url) => {
  try {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await API.get(url);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};
