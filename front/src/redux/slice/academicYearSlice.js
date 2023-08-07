const academicYearReducer = (
  state = { academicYear: [], loading: false, error: false, errorType: null },
  action
) => {
  switch (action.type) {
    case "GET_ACADEMIC_YEAR_START":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_ACADEMIC_YEAR_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        academicYear: action.data,
      };
    case "GET_ACADEMIC_YEAR_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_ACADEMIC_YEAR_START":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_ACADEMIC_YEAR_SUCCESS":
      return {
        ...state,
        academicYear: [...state.academicYear],
        loading: false,
        error: false,
      };
    case "CREATE_ACADEMIC_YEAR_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default academicYearReducer;
