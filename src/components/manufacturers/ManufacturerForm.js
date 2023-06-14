import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


const ManufacturerForm = ({ manufacturer, onSave, saving = false }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(
    { defaultValues: { manufacturerName: manufacturer.name } }
  );
  let formWrapperStyle = "form-group";

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   // take prev obj and replace with new obj and updated field 'name'
  //   setManufacturer((prevManufacturer) => ({
  //     ...prevManufacturer,
  //     [name]: value,
  //   }));
  // }

  if (errors && errors.length > 0) {
    formWrapperStyle += " has-error";
  }

  const submit = data => {
    onSave(data);
  }

  const errorSection = (errorField, type, message) => {
    if (errorField?.type === type) {
      console.log(errorField);
      return (
        <div className="alert alert-danger">
          <p>{message ?? errorField.message}</p>
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
  }, []);

  return (
    <div className="row content">
      <div className="col-12">
        <h2>{manufacturer.id ? "Edit" : "Create"} Manufacturer (using react hook form)</h2>
      </div>
      <div className="col-12 col-md-4">
        <form onSubmit={handleSubmit(submit)} autoComplete="off">
          <div className={formWrapperStyle}>
            <label htmlFor="manufacturer">Manufacturer:</label>
            <input type="text"
              name="manufacturer"
              {...register("name", { required: "Manufacturer name is required" })}
            />
            {errorSection(errors?.name, "required")}
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value={saving ? "Saving" : "Save"}
          />
        </form>
      </div>
    </div>
  );
}


export default ManufacturerForm;
