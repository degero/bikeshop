import React from "react";

const BikeForm = ({ bike, onSave, onChange }) => {
  return (
    <div class="row content">
      <div class="col-12 col-md-4">
        <form onSubmit={onSave} autoComplete="off">
          <div class="form-group">
            <label for="FirstName">Manufacturer:</label>
            <input
              class="form-control"
              type="text"
              required
              name="manufacturer"
              onChange={onChange}
              value={bike.manufacturer}
            />
          </div>
          <div class="form-group">
            <label for="LastName">Model:</label>
            <input
              class="form-control"
              type="text"
              required
              name="model"
              onChange={onChange}
              value={bike.model}
            />
          </div>
          <div class="form-group">
            <label for="Email">Price:</label>
            <input
              class="form-control"
              type="text"
              required
              name="price"
              onChange={onChange}
              value={bike.price}
            />
          </div>
          <input class="btn btn-primary" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default BikeForm;
