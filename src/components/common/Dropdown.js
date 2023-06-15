import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ value, error, onChange, name, label, options }) => {
  const [selectedValue, setSelectedValue] = useState(value != null ? value.toString() : '');
  let formWrapperStyle = "form-group";
  if (error && error.length > 0) {
    formWrapperStyle += " has-error";
  }
  const onChangeLocal = (event) => {
    setSelectedValue(event.target.value);
    event.target.value = parseInt(event.target.value);
    onChange(event);
  }

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div className={formWrapperStyle}>
      <label htmlFor={name}>{label}</label>
      <select
        className="form-control"
        name={name}
        onChange={(e) => onChangeLocal(e)}
        value={selectedValue}
      >
        <option value="">Please select</option>
        {options ? (
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>{option.text}</option>
            );
          })
        ) : (
          <></>
        )}

      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.any,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
