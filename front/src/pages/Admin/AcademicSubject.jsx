import {useState} from "react";
import MainLayout from "../../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";

function AcademicSubject() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const data = useSelector(
    (state) => state.academicSubjectReducer.academicSubject
  );
  console.log(data)

  return (
    <MainLayout>
      <h1>Salut à tous</h1>
    </MainLayout>
  );
}

export default AcademicSubject;
