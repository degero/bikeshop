import React from "react";
import { cleanup, render } from "@testing-library/react";
import BikeForm from "./BikeForm";
import { newBike } from "../../models/bike";
import { manufacturers } from "../../mockendpoint/mockData";

afterEach(cleanup);

describe("BikeForm component", () => {
  it("should render Create bike header when bike prop is empty", () => {
    // ARRANGE / ACT
    const { getByText } = renderBikeForm();
    // ASSERT
    getByText("Create Bike");
  });

  it("should render Edit bike header when bike prop has id", () => {
    // ARRANGE / ACT
    let bike = newBike;
    bike.id = 22;
    const { getByText } = renderBikeForm({ bike });
    // ASSERT
    getByText("Edit Bike");
  });

  it('should label save button as "Save" when not saving', () => {
    // ARRANGE / ACT
    const { getByText } = renderBikeForm();
    // ASSERT
    getByText("Save");
  });

  it('should label save button as "Saving..." when saving', () => {
    // ARRANGE / ACT
    const { getByText } = renderBikeForm({ saving: true });
    // ASSERT
    getByText("Saving");
  });
});

//#region helper functions

function renderBikeForm(args) {
  let defaultProps = {
    bike: newBike,
    manufacturers,
    onSave: () => { },
    onChange: () => { },
    errors: {},
    saving: false,
  };

  const props = { ...defaultProps, ...args };
  return render(<BikeForm {...props} />);
}

//#endregion
