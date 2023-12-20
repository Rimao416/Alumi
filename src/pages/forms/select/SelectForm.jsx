import React from "react";
import Select from "react-select";

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const SelectForm = ({
  title,
  options,
  data,
  setData,
  header,
  defaultValue = options[0],
}) => {
  return (
    <div>
      <label htmlFor=" hh" className="form-label ">
        {title}
      </label>
      <Select
        className="react-select"
        classNamePrefix="select"
        options={options}
        value={defaultValue}
        styles={styles}
        id="hh"
        onChange={(selectedOption) => {
          // Ajoutez la gestion personnalisée de l'événement onChange ici
          const selectedValue = selectedOption.value; // ou toute autre propriété que vous souhaitez extraire
          setData({ ...data, [header]: selectedValue });
        }}
      />
    </div>
  );
};

export default SelectForm;
