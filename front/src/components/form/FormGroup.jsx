import Select from "./Select";

function FormGroup({ label, children }) {
  return (
    <>
      <label htmlFor="" className="auth__form--label label">
        {label}
      </label>
      {children}
    </>
  );
}

export default FormGroup;
