import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


const ManufacturerForm = ({ manufacturer, onSave, saving = false }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(
    { defaultValues: { name: manufacturer.name } }
  );
  let formWrapperStyle = "form-group";

  if (errors && errors.length > 0) {
    formWrapperStyle += " has-error";
  }

  const submit = data => {
    onSave(data);
  }

  const errorSection = (errorField, type, message) => {
    if (errorField?.type === type) {
      return (
        <div className="alert alert-danger" role="alert">
          <p className="error-text">{message ?? errorField.message}</p>
        </div>
      )
    }
  }
  useEffect(() => {
    if (manufacturer.id != null) {
      // edit form set values
      const fields = ['name'];
      fields.forEach(field => setValue(field, manufacturer[field]));
    }
  }, [manufacturer, setValue]);

  return (
    <div className="row content">
      <div className="col-12">
        <h2>{manufacturer.id ? "Edit" : "Create"} Manufacturer</h2>
        <p>* using react-hook-form</p>
      </div>
      <div className="col-12 col-md-4">
        <form onSubmit={handleSubmit(submit)} autoComplete="off">
          <div className={formWrapperStyle}>
            <label htmlFor="name">Manufacturer name:</label>
            <input className="form-control" type="text" id="name"
              {...register("name", { required: "Manufacturer name is required" })}
            />
          </div>
          {errorSection(errors?.name, "required")}
          <button
            className="btn btn-primary"
            type="submit"
          >{saving ? "Saving" : "Save"}</button>
        </form>
      </div>
    </div>
  );
}


export default ManufacturerForm;
