import React, { useState } from "react";
import Card from "@/components/ui/Card";
// import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Textinput from "@/components/ui/Textinput";
import * as yup from "yup";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchAcademicPrograms } from "../../../slice/admin/programSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { removeEmptyProperties } from "../../utility/utils";
import SelectForm from "../../forms/select/SelectForm";
import MultiSelect from "../../forms/select/MultiSelect";
import { fetchAcademicTeacher } from "../../../slice/admin/teacherSlice";
import { getClass } from "../../../slice/admin/classSlice";
import {
  addSubjects,
  getSingleSubject,
} from "../../../slice/admin/subjectSlice";
import { getTerms } from "../../../slice/admin/termSlice";
function SujetsOperation() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const [dataProgram, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [credentials, setCredentials] = useState({
    name: "",
    academicTerm: "",
    teacher: "",
    classLevel: [],
  });
  //   let status = "";
  const getAllAcademiquePrograms = async () => {
    await dispatch(fetchAcademicPrograms());
  };
  const getAllAcademiqueTeacher = async () => {
    await dispatch(fetchAcademicTeacher());
  };
  const getAllClasses = async () => {
    await dispatch(getClass());
  };
  const getAllTerms = async () => {
    await dispatch(getTerms());
  };

  // const getSingleSubject = async (identifiant) => {
  //   const response = await dispatch(getSingleSubject(id));
  //   return response.data.payload;
  // };

  useEffect(() => {
    // dispatch(fetchAcademicPrograms());
    // dispatch(fetchAcademicTeacher());
    // dispatch(getClass());
    // dispatch(getTerms());

    if (location.pathname.startsWith("/sujets-create")) {
      //   status = "create";
      setStatus("create");
      // dispatch(fetchAcademicPrograms());
      // dispatch(fetchAcademicTeacher());
      // dispatch(getClass());
      // dispatch(getTerms());
    } else if (location.pathname.startsWith("/sujets-edit")) {
      dispatch(getSingleSubject(id))
        .then((res) => {
          console.log(res);
          //   setCredentials(res.payload.data);
          //   1) Mettre toutes les id des classes dans le tableau classLevel
          setCredentials({
            ...credentials,
            name: res.payload.data.name,
            academicTerm: res.payload.data.academicTerm._id,
            teacher: res.payload.data.teacher._id,
            classLevel: res.payload.data.classLevel.map(
              (classItem) => classItem._id
            ),
          });
          //   2) Mettre toutes les id des enseignants dans le tableau teacher
          //   3) Mettre tous les id des programmes dans le tableau academicProgram
        })
        .then(() => {
          dispatch(fetchAcademicPrograms());
          dispatch(fetchAcademicTeacher());
          dispatch(getClass());
          // dispatch(getTerms());
        });

      setStatus("edit");
    }
  }, [location, id]);

  const { academicTerm: periodes, loading } = useSelector(
    (state) => state.termSlice
  );
  const { academicTeacher: teachers } = useSelector(
    (state) => state.teacherSlice
  );
  const { academicClass: classes } = useSelector((state) => state.classSlice);
  const { academicSubject: subjects } = useSelector(
    (state) => state.subjectSlice
  );
  console.log(subjects);
  console.log("Je me suis lancé");

  const navigate = useNavigate();
  let FormValidationSchema = null;
  if (status === "create") {
    FormValidationSchema = yup.object({
      name: yup.string().required("Le nom est requis"),
    });
  } else if (status === "edit") {
    FormValidationSchema = yup.object({
      name: yup.string(),
    });
  }
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status == "create") {
      console.log(credentials);
    } else {
      console.log("SALUTTT");
      console.log(credentials);
    }

    const response = await dispatch(addSubjects(credentials));
    console.log(response);
    if (response.type == "academicSubject/addSubjects/fulfilled") {
      toast.success("Sujet ajouté avec succès");
      navigate("/sujets");
    } else if (response.type == "academicSubject/addSubjects/rejected") {
      toast.error(response.error?.message);
    }
  };
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      {loading === false && (
        <div className="xl:col-span-2 col-span-1">
          <Card
            title={
              status === "create"
                ? "Création d'un cours"
                : "Modification d'un cours"
            }
          >
            <form
              onSubmit={handleSubmit}
              className="lg:grid-cols-2 grid gap-5 grid-cols-1 "
            >
              <Textinput
                name="name"
                label="Nom du Cours"
                type="text"
                register={register}
                onChange={handleChange}
                value={credentials?.name}
                error={errors.name}
                defaultValue={credentials?.name}
              />
              <SelectForm
                data={credentials}
                setData={setCredentials}
                header="academicTerm"
                title="Période Académique"
                register={register}
                error={errors.academicTerm}
                defaultValue={
                  periodes?.find(
                    (periode) => periode._id === credentials?.academicTerm
                  ) && {
                    value: credentials.academicTerm,
                    label: periodes?.find(
                      (periode) => periode._id === credentials.academicTerm
                    ).name,
                  }
                }
                options={periodes?.map((periode) => {
                  return {
                    value: periode._id,
                    label: periode.name,
                  };
                })}
              />
              <SelectForm
                data={credentials}
                setData={setCredentials}
                header="teacher"
                title="Professeur de la matières"
                //   LOOK TEACHER INTO CREDENTIALS
                defaultValue={
                  teachers.find(
                    (teacher) => teacher._id === credentials?.teacher
                  ) && {
                    value: credentials.teacher,
                    label: teachers.find(
                      (teacher) => teacher._id === credentials.teacher
                    ).name,
                  }
                }
                //   register={register}
                options={teachers.map((teacher) => {
                  return {
                    value: teacher._id,
                    label: teacher.name,
                  };
                })}
              />
              <MultiSelect
                title="Classes associées"
                options={classes.map((program) => {
                  return {
                    value: program._id,
                    label: program.name,
                  };
                })}
                data={credentials}
                setData={setCredentials}
                header="classLevel"
              />
              <div className="lg:col-span-2 col-span-1">
                <div className="ltr:text-right rtl:text-left">
                  <Button
                    className="btn btn-dark text-center"
                    type="submit"
                    isLoading={loading}
                  >
                    {status === "create" ? "Enregistrer" : "Modifier"}
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}

export default SujetsOperation;
