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
import Teacher from "./pages/Admin/Teacher";
import TeacherCreate from "./pages/Admin/TeacherCreate";
import "react-phone-input-2/lib/style.css";
import TeacherInfo from "./pages/Admin/TeacherInfo";
import AcademicSubject from "./pages/Admin/AcademicSubject";
import SubjectCreate from "./pages/Admin/SubjectCreate";

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
        <Route path="/admin/teacher" element={<Teacher />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/teacher/add" element={<TeacherCreate />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/teacher/:id" element={<TeacherInfo />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/terms" element={<AcademicTerm />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/class" element={<ClassLevel />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/program" element={<AcademicProgram />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/subjects" element={<AcademicSubject />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/subjects/create" element={<SubjectCreate />} />
      </Route>
      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
        <Route path="/admin/subjects/edit/:_id" element={<SubjectCreate />} />
      </Route>
    </Routes>
  );
}

export default App;
