import React from "react";
import { mount } from "enzyme";
import { manufacturers } from "../../mockendpoint/mockData";
import { newManufacturer } from "../../models/manufacturer";
import { ManufacturerCrudForm } from "./ManufacturerCrudForm";
import { render, screen, fireEvent, act, waitFor, getByText } from "@testing-library/react"

const defaultProps = {
  manufacturers,
  manufacturer: newManufacturer,
  loadManufacturers: jest.fn(),
  saveManufacturer: jest.fn(),
  history: {},
  errors: {}
};
const wait = () => new Promise(resolve => setTimeout(resolve));
const waitForPromises = () => new Promise(setImmediate);
describe("ManufacturerCrudForm component - deep render", () => {

  // This is to demonstrate using react hook form with enzyme mount - the other tests use react testing library render()
  it("submit shows 1 error messages when no fields input", async () => {
    // ARRANGE
    const data = {
      manufacturer: { ...newManufacturer },
    };

    const props = { ...defaultProps, ...data };
    const form = mount(<ManufacturerCrudForm {...props} />);

    // ACT
    await act(async () => {
      form.find("form").simulate("submit");
    });

    // ASSERT
    await waitForPromises();
    form.update();
    const error = form.find(".error-text");
    expect(error.length).toEqual(1);
  });

  it("submit shows error message when manufacturer name field is empty", async () => {
    // ARRANGE
    const data = {
      manufacturer: { ...newManufacturer },
    };
    const form = renderManufacturerCrudForm(data);

    // ACT

    fireEvent.submit(screen.getByRole("button"))

    // ASSERT

    expect(await screen.findAllByRole("alert")).toHaveLength(1)
    const error = await form.findAllByRole("alert");
    expect(error[0]).toHaveTextContent('Manufacturer name is required');
  });

  it("submit shows no error message when manufacturer name field is filled", async () => {
    // ARRANGE
    const data = {
      manufacturer: { ...newManufacturer }
    };
    const form = renderManufacturerCrudForm(data);
    defaultProps.saveManufacturer.mockResolvedValueOnce(true);
    // ACT

    // await act(async () => {
    fireEvent.input(screen.getByLabelText("Manufacturer name:"), {
      target: {
        value: "Santa cruz",
      },
    });
    // });

    fireEvent.submit(screen.getByRole("button"))

    // ASSERT
    expect(await screen.findAllByRole("button")).toHaveLength(1);
    expect(screen.queryAllByRole("alert")).toHaveLength(0);
  });


  it("submit call saveManufacturer callback when required fields filled", async () => {
    // ARRANGE
    const data = {
      manufacturer: { ...newManufacturer }
    };
    const form = renderManufacturerCrudForm(data);
    defaultProps.saveManufacturer.mockClear();
    defaultProps.saveManufacturer.mockResolvedValueOnce(true);
    // ACT

    // await act(async () => {
    fireEvent.input(screen.getByLabelText("Manufacturer name:"), {
      target: {
        value: "Santa cruz",
      },
    });
    // });

    fireEvent.submit(screen.getByRole("button"))

    // ASSERT
    expect(await screen.findAllByRole("button")).toHaveLength(1);
    expect(screen.getByRole("textbox", { name: /name/i })).toHaveValue("Santa cruz")
    expect(defaultProps.saveManufacturer).toHaveBeenCalledTimes(1);
  });

});

//#region Helper functions

function renderManufacturerCrudForm(args) {


  const props = { ...defaultProps, ...args };

  return render(<ManufacturerCrudForm {...props} />);
}
//#endregion
