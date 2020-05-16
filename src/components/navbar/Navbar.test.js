import React from "react";
import Navbar from "./Navbar";
import { mount, shallow } from "enzyme";
import Constants from "../../util/constants";

describe("Navbar component", () => {
  it("contains same number of navitems as routes", () => {
    // ARRANGE
    const props = { routes: Constants.Routes };
    const navbar = shallow(<Navbar {...props} />);

    // ACT
    const numItems = navbar.find("NavItem").length;

    // ASSERt
    expect(numItems).toEqual(Constants.Routes.length);
  });
});
