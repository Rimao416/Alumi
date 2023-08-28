import React from "react";
import ModalLayout from "../../layout/ModalLayout";

function ModalHandleTerm({ onClose, modal }) {
  return (
    <ModalLayout title="Nouvelle période" onClose={onClose} modal={modal}>
      <form>
        <div className="form__wrapper">
          <label htmlFor="" className="auth__form--label label">
            Période n°
          </label>
          <input
            type="number"
            defaultValue={1}
            className={`auth__form--input input--form u-margin-top-small`}
            name="identifier"
          />
        </div>
        <div className="form__wrapper u-block u-margin-top-medium">
          <label htmlFor="" className="auth__form--label label">
            Type
          </label>
          <select className="input--form u-margin-top-small">
            <option value="Trimestre">Trimestre</option>
            <option value="Semestre">Semestre</option>
          </select>
        </div>

        <button className="btn u-block u-margin-top-big" type="submit">
          Enregistrer
        </button>
      </form>
    </ModalLayout>
  );
}

export default ModalHandleTerm;
