import React from "react";
import { mount } from "enzyme";
import { bikes } from "../../mockendpoint/mockData";
import { manufacturers } from "../../mockendpoint/mockData";
import { newBike } from "../../models/bike";
import { BikeCrudForm } from "./BikeCrudForm";

describe("BikeCrudForm component - deep render", () => {
  it("submit shows 3 error messages when no fields input", () => {
    // ARRANGE
    const form = renderBikeCrudForm();

    // ACT
    form.find("form").simulate("submit");

    // ASSERT
    const error = form.find(".alert");
    expect(error.length).toEqual(3);
  });

  it("submit shows error message when manufacturer field is empty", () => {
    // ARRANGE
    const data = {
      bike: { ...newBike, ...{ model: "Santa cruz", price: "3000" } },
    };
    const form = renderBikeCrudForm(data);

    // ACT
    form.find("form").simulate("submit");

    // ASSERT
    const error = form.find(".alert");
    expect(error.length).toEqual(1);
    expect(error.at(0).text()).toBe("Manufacturer is required.");
  });

  it("submit shows error message when Price field is empty", () => {
    // ARRANGE
    const data = {
      bike: { ...newBike, ...{ model: "Tallboy", manufacturerId: 1 } },
    };
    const form = renderBikeCrudForm(data);

    // ACT
    form.find("form").simulate("submit");

    // ASSERT
    const error = form.find(".alert");
    expect(error.length).toEqual(1);
    expect(error.at(0).text()).toBe("Price is required.");
  });

  it("submit shows error message when Model field is empty", () => {
    // ARRANGE
    const data = {
      bike: { ...newBike, ...{ price: "10000000", manufacturerId: 1 } },
    };
    const form = renderBikeCrudForm(data);

    // ACT
    form.find("form").simulate("submit");

    // ASSERT
    const error = form.find(".alert");
    expect(error.length).toEqual(1);
    expect(error.at(0).text()).toBe("Model is required.");
  });
});

//#region Helper functions

function renderBikeCrudForm(args) {
  const defaultProps = {
    bikes,
    manufacturers,
    loadBikes: jest.fn(),
    saveBike: jest.fn(),
    history: {},
    bike: newBike,
    match: {},
  };

  const props = { ...defaultProps, ...args };

  return mount(<BikeCrudForm {...props} />);
}

//#endregion
