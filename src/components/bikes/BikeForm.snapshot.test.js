import React from "react";
import renderer from "react-test-renderer";
import BikeForm from "./BikeForm";
import { bikes, manufacturers } from "../../mockendpoint/mockData";

describe("Bikeform component - snapshots", () => {
  it("sets submit button label 'Saving...' when saving is true", () => {
    // ARRANGE / ACT
    const tree = renderer.create(
      <BikeForm
        bike={bikes[0]}
        manufacturers={manufacturers}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving={true}
      />
    );
    // ASSERT
    expect(tree).toMatchSnapshot();
  });

  it("sets submit button label 'Save' when saving is false", () => {
    // ARRANGE / ACT
    const tree = renderer.create(
      <BikeForm
        bike={bikes[0]}
        manufacturers={manufacturers}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving={false}
      />
    );
    // ASSERT
    expect(tree).toMatchSnapshot();
  });
});
