import React from "react";
import TextInput from "../common/TextInput";

const BikeForm = ({ bike, onSave, onChange, errors = {}, saving = false }) => (
  <div className="row content">
    <div className="col-12 col-md-4">
      <h2>{bike.id ? "Edit" : "Create"} Bike</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <form onSubmit={onSave} autoComplete="off">
        <TextInput
          name="manufacturer"
          label="Manufacturer:"
          onChange={onChange}
          value={bike.manufacturer}
          error={errors.manufacturer}
        ></TextInput>
        <TextInput
          name="model"
          label="Model:"
          onChange={onChange}
          value={bike.model}
          error={errors.model}
        ></TextInput>
        <TextInput
          name="price"
          label="Price ($USD):"
          onChange={onChange}
          value={bike.price}
          error={errors.price}
        ></TextInput>
        <input
          className="btn btn-primary"
          type="submit"
          value={saving ? "Saving" : "Save"}
        />
      </form>
    </div>
  </div>
);

export default BikeForm;
