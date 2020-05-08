import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import Constants from "../../util/constants";

describe("Header component", () => {
  it("Renders a Navbar", () => {
    // ARRANGE
    const header = shallow(<Header />);

    // ACT
    const numItems = header.find("Navbar").length;

    // ASSERt
    expect(numItems).toEqual(1);
  });
});
