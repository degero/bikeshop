import React from "react";
import renderer from "react-test-renderer";
import ManufacturerForm from "./ManufacturerForm";
import { manufacturers } from "../../mockendpoint/mockData";

describe("ManufacturerForm component - snapshots", () => {
  it("sets submit button label 'Saving...' when saving is true", () => {
    // ARRANGE / ACT
    const tree = renderer.create(
      <ManufacturerForm
        manufacturer={manufacturers[0]}
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
      <ManufacturerForm
        manufacturer={manufacturers[0]}
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
