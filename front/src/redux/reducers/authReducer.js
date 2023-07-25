const authReducer = (
  state = { authData: null, loading: false, error: false, errorType: null },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      console.log(action.data);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        errorType: action.data.type,
      };
    default:
      return state;
  }
};

export default authReducer;
