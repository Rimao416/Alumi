import * as AuthApi from "../api/AuthRequest.js";
import { toast } from "react-toastify";
export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_START" });
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data });
    // navigate("../admin/dashboard", { replace: true });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: "AUTH_FAIL" ,data:error.response.data});
  }
};
