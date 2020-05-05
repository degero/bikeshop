import React from "react";
import TextInput from "../common/TextInput";

const BikeForm = ({ bike, onSave, onChange, errors }) => {
  return (
    <div class="row content">
      <div class="col-12 col-md-4">
        <h2>{bike.id ? "Edit" : "Create"} Bike</h2>
        {errors.onSave && (
          <div class="alert alert-danger" role="alert">
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
          <input class="btn btn-primary" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default BikeForm;
