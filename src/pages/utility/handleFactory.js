import { API } from "../../configs/config";
import { toast } from "react-toastify";
API.defaults.withCredentials = true;
export const fetchWithAuthorization = async (url) => {
  try {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await API.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};

export const generateGetAsyncThunk = (name, endpoint) => {
  return createAsyncThunk(name, async (_, { rejectWithValue }) => {
    try {
      const response = await API.get(endpoint);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  });
};
export const getSingleData = (name, endpoint, params) => {
  return createAsyncThunk(name, async (params, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("profile"));
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await API.get(endpoint + "/" + params);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  });
};
export const addWithAuthorization = async (url, data, returndataKey) => {
  try {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await API.post(url, data);
    console.log(response);
    toast.success(response.data.message);
    return response.data[returndataKey];
  } catch (error) {
    console.error(error);
    toast.error(
      error.response.data.message ||
        "Une erreur est survenue lors de la connexion."
    );
    throw error.response.data;
  }
};

export const updateWithAuthorization = async (url, data, returndataKey) => {
  try {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await API.put(url, data);
    console.log(response);
    toast.success(response.data.message);
    return response.data[returndataKey];
  } catch (error) {
    console.error(error);
    toast.error(
      error.response.data.message ||
        "Une erreur est survenue lors de la connexion."
    );
    throw error.response.data;
  }
};
