import React from "react";
import Select from "react-select";

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const SelectForm = ({ title, options, data, setData, header }) => {
  const handleChange = (selectedOption, header) => {
    const selectedValue = selectedOption.value;
    setData((prevData) => ({
      ...prevData,
      [header]: selectedValue,
    }));
  };
  return (
    <div>
      <label htmlFor=" hh" className="form-label ">
        {title}
      </label>
      <Select
        className="react-select"
        classNamePrefix="select"
        defaultValue={options[0]}
        options={options}
        styles={styles}
        id="hh"
        onChange={(selectedOption) => {
          console.log(selectedOption);
          // Ajoutez la gestion personnalisée de l'événement onChange ici
          const selectedValue = selectedOption.value; // ou toute autre propriété que vous souhaitez extraire
          setData({ ...data, sexe: selectedValue });
        }}
      />
    </div>
  );
};

export default SelectForm;
