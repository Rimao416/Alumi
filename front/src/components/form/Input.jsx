import React from "react";

function Input({ type, placeholder, name,onChange,valeur="" }) {
  return (
    <input
      className="auth__form--input input--form u-margin-top-small"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={valeur}
      // defaultValue={"Safd"}
    />
  );
}

export default Input;
