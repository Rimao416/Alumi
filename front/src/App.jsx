import "./main.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AcademicYear from "./pages/Admin/AcademicYear";
// import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PasswordForgot from "./pages/PasswordForgot";
import PasswordReset from "./pages/PasswordReset";
import AcademicTerm from "./pages/Admin/AcademicTerm";
import ClassLevel from "./pages/Admin/ClassLevel";
import AcademicProgram from "./pages/Admin/AcademicProgram";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/password-forgot" element={<PasswordForgot />} />
      <Route path="/password-reset/:token" element={<PasswordReset />} />

      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin" element={<AcademicYear />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/terms" element={<AcademicTerm />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/class" element={<ClassLevel />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/program" element={<AcademicProgram />} />
      </Route>
    </Routes>
  );
}

export default App;
