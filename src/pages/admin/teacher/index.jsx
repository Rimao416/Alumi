import React from "react";
import HomeBredCurbs from "../../dashboard/HomeBredCurbs";
// import Card from "../../../components/ui/Card";
// import BasicArea from "../../chart/appex-chart/BasicArea";
// import ExamapleOne from "../../table/react-tables/ExampleOne";
import Datatables from "../../table/react-tables/Datatables";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAcademicTeacher } from "../../../slice/admin/teacherSlice";
import HomeHeader from "../../dashboard/HomeHeader";
function Professeurs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAcademicTeacher(false));
  }, []);
  const { academicTeacher: teachers, loading } = useSelector(
    (state) => state.teacherSlice
  );
  return (
    <div className="space-y-5">
      <HomeHeader title="Professeurs" />

      {loading == false && (
        <Datatables title="Liste des professeurs" content={teachers} />
      )}
    </div>
  );
}

export default Professeurs;
