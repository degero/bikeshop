import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ value, error, onChange, name, label }) => {
  let formWrapperStyle = "form-group";

  if (error && error.length > 0) {
    formWrapperStyle += " has-error";
  }

  return (
    <div class={formWrapperStyle}>
      <label for={name}>{label}</label>
      <input
        class="form-control"
        type="text"
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <div class="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.object.isRequired,
  error: PropTypes.func.isRequired,
  onChange: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  label: PropTypes.object.isRequired,
};

export default TextInput;
