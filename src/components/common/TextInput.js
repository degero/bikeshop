import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ value, error, onChange, name, label }) => {
  let formWrapperStyle = "form-group";

  if (error && error.length > 0) {
    formWrapperStyle += " has-error";
  }

  return (
    <div className={formWrapperStyle}>
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type="text"
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.any.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
