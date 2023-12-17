import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ roles }) {
  const isAuthenticated = useSelector((state) => state.authSlice.user?.user);
  console.log(isAuthenticated?.role);

  console.log(isAuthenticated);
  return isAuthenticated?.role.includes(roles) ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace/>
  );
}

// ProtectedRoutes.propTypes = {
//   roles: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default ProtectedRoutes;

// function ProtectedRoutes ({ roles })  {
//   const isAuthenticated = useSelector((state) => state.authReducer.authData);

//   console.log(isAuthenticated);
//   return isAuthenticated.roles.includes(roles) ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" />
//   );
// }

// export default ProtectedRoutes;
