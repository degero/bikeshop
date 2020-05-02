import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BikeForm from "./BikeForm";

const BikeCrudForm = ({ saveBike, history, ...props }) => {
  const [bike, setBike] = useState({});

  function formIsValid() {
    const { manufacturer, model, price } = bike;
    const errors = {};

    if (!manufacturer) errors.manufacturer = "Title is required.";
    if (!model) errors.model = "Author is required";
    if (!price) errors.price = "Category is required";

    // TODO set errors
    //setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setBike((prevBike) => ({
      ...prevBike,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveBike(bike)
      .then(() => {
        // TODO show success
        history.push("/bikes");
      })
      .catch((error) => {
        // TODO show errors
      });
  }

  return (
    <BikeForm
      onSave={handleSave}
      onChange={handleInputChange}
      bike={bike}
    ></BikeForm>
  );
};

BikeCrudForm.propTypes = {
  bike: PropTypes.object.isRequired,
  saveBike: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default BikeCrudForm;
