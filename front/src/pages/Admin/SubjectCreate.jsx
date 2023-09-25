import { useEffect, useState } from "react";
import FormGroup from "../../components/form/FormGroup";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import MainLayout from "../../layout/MainLayout";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchAcademicTeacher } from "../../redux/slice/adminTeacherSlice";
import { fetchAcademicTerms } from "../../redux/slice/academicTermSlice";
import { fetchClassLevels } from "../../redux/slice/classSlice";
import MainButton from "../../components/MainButton";
import { useParams } from "react-router-dom";
import {
  addAcademicSubjects,
  initializeSubject,
} from "../../redux/slice/academicSubject";
import { useNavigate } from "react-router-dom";
function SubjectCreate() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, status, academicSubject } = useSelector(
    (state) => state.academicSubjectReducer
  );

  useEffect(() => {
    dispatch(initializeSubject());
    dispatch(fetchAcademicTeacher());
    dispatch(fetchClassLevels());
    dispatch(fetchAcademicTerms());
  }, [dispatch]);

  useEffect(() => {
    if (status === "success") {
      navigate("/admin/subjects");
    }
  }, [status]);
  const { academicTeacher } = useSelector(
    (state) => state.academicTeacherReducer
  );
  const [subject,setSubject] = useState([])
  const { academicTerm } = useSelector((state) => state.academicTermReducer);
  const { classLevel } = useSelector((state) => state.classLevelReducer);
  const classOptions = classLevel.map((classObj) => ({
    value: classObj._id, // You can use the _id as the value
    label: classObj.name, // Use the name as the label
  }));
  const [data, setData] = useState({
    name: "",
    academicTerm: "",
    teacher: "",
    classLevel: [],
  });
  useEffect(() => {
    if (_id) {
      const subject = academicSubject.find((item) => item._id === _id);
      
      setData(subject);
    }
  }, [_id]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSelect = (selectedList) => {
    // Update the selected classes
    // const selectedIds =
    // setSelectedClasses(selectedIds);
    setSelectedClasses(selectedList);
    console.log(selectedList);
    // console.log(selectedItem)

    // Update the data state with the selected classes
    setData((prevState) => ({
      ...prevState,
      classLevel: selectedList.map((item) => item.value),
    }));
  };

  const onRemove = (selectedList) => {
    // Update the selected classes
    setSelectedClasses(selectedList);
    // console.log("Je m'applique");
    // console.log(removedItem)
    // console.log(selectedList);

    // Update the data state by removing the class
    setData((prevState) => ({
      ...prevState,
      classLevel: selectedList.map((item) => item.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAcademicSubjects(data));
    navigate("/admin/subjects");
    // console.log(data);
  };
  return (
    <MainLayout>
      <form className="form__layout" onSubmit={handleSubmit}>
        <div className="form__layout--wrapper">
          <FormGroup label="Name">
            <Input
              type="text"
              placeholder="Entrez le nom du cours actuel"
              name="name"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div className="form__layout--wrapper">
          <FormGroup label="Période Académique">
            <Select name="academicTerm" handleChange={handleChange}>
              <option>-------------------------</option>
              {academicTerm?.map((item) => (
                <option key={item.id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </Select>
            {_id && (
                <p>La période académique actuelle est {data.academicTerm.name}</p>
            )}
          </FormGroup>
        </div>
        <div className="form__layout--wrapper">
          <FormGroup label="Professeur">
            <Select name="teacher" handleChange={handleChange}>
              <option>-------------------------</option>
              {academicTeacher?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormGroup>
        </div>
        <div className="form__layout--wrapper">
          <FormGroup label="Classes Associées">
            <Multiselect
              options={classOptions}
              selectedValues={selectedClasses}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="label"
            />
          </FormGroup>
        </div>
        <MainButton
          text="Enregistrer"
          isDisabled={false}
          type="submit"
          classname="main-button"
          loading={loading}
        />
      </form>
    </MainLayout>
  );
}

export default SubjectCreate;
