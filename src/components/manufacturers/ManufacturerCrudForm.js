import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ManufacturerForm from "./ManufacturerForm";
import { loadManufacturers, saveManufacturer } from "../../redux/actions/manufacturerActions";
import { newManufacturer } from "../../models/manufacturer";

export function ManufacturerCrudForm({
  manufacturers,
  loadManufacturers,
  saveManufacturer,
  history,
  ...props
}) {
  const [manufacturer, setManufacturer] = useState({ ...props.manufacturer });
  const [errors, setErrors] = useState({});
  const [isSaving, setSaving] = useState(false);

  useEffect(() => {
    // load manufacturers if user navigated directly to this page
    if (!manufacturers) {
      setErrors(null);
      loadManufacturers().catch((err) => {
        setErrors({ loadError: "Error loading manufacturers: " + err });
      });
    } else {
      setManufacturer({
        ...props.manufacturer
      });
    }
  }, [props.manufacturer, loadManufacturers, manufacturers]);

  function handleSave(data) {
    setErrors(null);
    setSaving(true);
    saveManufacturer({ ...manufacturer, name: data.name })
      .then(() => {
        setSaving(false);
        // TODO show success
        history.push("/manufacturers");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <div>
      {errors ? (
        Object.getOwnPropertyNames(errors).map((v, i) => {
          return (<div key={i} className="col-12 col-md-4 alert alert-danger">
            {errors[v]}
          </div>);
        })) : (
        <></>
      )}
      <ManufacturerForm
        onSave={handleSave}
        manufacturer={manufacturer}
        saving={isSaving}
      ></ManufacturerForm>
    </div>
  );
}

ManufacturerCrudForm.propTypes = {
  manufacturer: PropTypes.object.isRequired,
  errors: PropTypes.object,
  manufacturers: PropTypes.array,
  loadManufacturers: PropTypes.func.isRequired,
  saveManufacturer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function getManufacturerBySlug(manufacturers, slug) {
  return manufacturers.find((manufacturer) => manufacturer.slug === slug);
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const manufacturer =
    slug && state.manufacturers && state.manufacturers.length > 0
      ? getManufacturerBySlug(state.manufacturers, slug)
      : newManufacturer;
  return {
    manufacturer,
    manufacturers: state.manufacturers,
  };
}

const mapDispatchToProps = {
  loadManufacturers,
  saveManufacturer,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerCrudForm);
