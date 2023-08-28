import React, { useState } from "react";
import ModalLayout from "../../layout/ModalLayout";
import FormGroup from "../form/FormGroup";
import Select from "../form/Select";
import { useDispatch } from "react-redux";
import { addClassLevel } from "../../redux/slice/classSlice";

function ModalHandleClass({ onClose, modal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("Licence");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addClassLevel(name))
    // disp
  };
  return (
    <ModalLayout title="Nouveau Niveau" onClose={onClose} modal={modal}>
      <form onSubmit={handleSubmit}>
        <div className="form__wrapper w-600">
          <FormGroup label="Veuillez choisir le niveau">
            <Select name="name" handleChange={handleChange}>
              <option value="Licence">Licence</option>
              <option value="Master">Master</option>
              <option value="Doctorat">Doctorat</option>
            </Select>
          </FormGroup>
        </div>
        <button className="btn u-block u-margin-top-big" type="submit">
          Enregistrer
        </button>
      </form>
    </ModalLayout>
  );
}

export default ModalHandleClass;
