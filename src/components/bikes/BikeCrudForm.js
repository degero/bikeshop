import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BikeForm from "./BikeForm";
import { loadBikes, saveBike } from "../../redux/actions/bikeActions";
import { newBike } from "../../models/bike";

export function BikeCrudForm({
  bikes,
  loadBikes,
  saveBike,
  history,
  ...props
}) {
  const [bike, setBike] = useState({ ...props.bike });

  useEffect(() => {
    // load bikes if user navigated directly to this page
    if (!bikes) {
      loadBikes().catch((err) => alert("Error loading bikes:" + err));
    } else {
      setBike({ ...props.bike });
    }
  }, [props.bike]);

  function formIsValid() {
    const { manufacturer, model, price } = bike;
    const errors = {};

    if (!manufacturer) errors.manufacturer = "Manufacturer is required.";
    if (!model) errors.model = "Model is required";
    if (!price) errors.price = "Price is required";

    // TODO set errors
    //setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    // take prev obj and replace with new obj and updated field 'name'
    setBike((prevBike) => ({
      ...prevBike,
      [name]: value,
    }));
  }

  function handleSave(event) {
    debugger;
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
}

BikeCrudForm.propTypes = {
  bike: PropTypes.object.isRequired,
  bikes: PropTypes.array,
  loadBikes: PropTypes.func.isRequired,
  saveBike: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function getBikeBySlug(bikes, slug) {
  return bikes.find((bike) => bike.slug === slug);
}

function mapStateToProps(state, ownProps) {
  debugger;

  const slug = ownProps.match.params.slug;
  const bike =
    slug && state.bikes && state.bikes.length > 0
      ? getBikeBySlug(state.bikes, slug)
      : newBike;
  return {
    bike,
    bikes: state.bikes,
  };
}

const mapDispatchToProps = {
  loadBikes,
  saveBike,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeCrudForm);
