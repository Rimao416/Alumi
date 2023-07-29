import "./main.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AcademicYear from "./pages/Admin/AcademicYear";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes roles={["Admin"]} />}>
      <Route path="/admin" element={<AcademicYear />} />
      </Route>

    </Routes>
  );
}

export default App;
