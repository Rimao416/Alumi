import React, { useState } from "react";
import ModalLayout from "../../layout/ModalLayout";
ModalLayout;

import "flatpickr/dist/themes/light.css";
import moment from "moment"

import Flatpickr from "react-flatpickr";
import { useDispatch } from "react-redux";
import { createAcademicYear } from "../../redux/actions/AcademicYearAction";
function ModalHandleAcademicYear({ onClose, modal }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState({
    fromYear: "",
    toYear:"",
  });
  const handleChange = (selectedDates, name) => {
    const selectedDate = moment(selectedDates[0]).format("YYYY-MM-DD")

    setDate({
      ...date,
      [name]: selectedDate,
    });
    setDate((prevDate) => ({
      ...prevDate,
      [name]: selectedDate,
    }));
  };
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(date)
    dispatch(createAcademicYear(date))
  }

  return (
    <ModalLayout
      title="Nouvelle année académique"
      onClose={onClose}
      modal={modal}
    >
      <form onSubmit={handleSubmit}>
        <div className="form__wrapper">
          <label htmlFor="" className="auth__form--label label">
            Premier jour de l'année
          </label>
          <Flatpickr
          data-enable-time
          name="fromYear"
          value={date.toYear}
          onChange={(selectedDates) => handleChange(selectedDates, "fromYear")}
          options={{
            enableTime: false,
          }}
          />
        </div>
        <div className="form__wrapper u-block u-margin-top-medium">
          <label htmlFor="" className="auth__form--label label">
            Dernier jour de l'année
          </label>
          <Flatpickr
          data-enable-time
          name="toYear"
          value={date.toYear}
          onChange={(selectedDates) => handleChange(selectedDates, "toYear")}
          options={{
            enableTime: false,
          }}
          />
        </div>
        <button className="btn u-block u-margin-top-big" type="submit">
          Enregistrer
        </button>
      </form>
    </ModalLayout>
  );
}

export default ModalHandleAcademicYear;