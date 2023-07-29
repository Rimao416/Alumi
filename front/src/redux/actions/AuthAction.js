import * as AuthApi from "../api/AuthRequest.js";
import { toast } from "react-toastify";
export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_START" });
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data });
    console.log(data)
    if (data.user.role === "Teacher") {
      navigate("/admin", { replace: true });
    } else if (data.user.role === "Admin") {
      console.log("Par ici")
      navigate("/admin", { replace: true });
    } else if (data.user.role === "Student") {
      navigate("/student", { replace: true });
    }
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: "AUTH_FAIL", data: error.response.data });
  }
};
