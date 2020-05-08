import React from "react";
import App from "./App";
import { mount, shallow } from "enzyme";

describe("App component", () => {
  it("renders header", () => {
    // ARRANGE
    const app = shallow(<App />);

    // ACT
    var header = app.find("Header");

    // ASSERT
    expect(header).not.toBeNull();
  });

  it("renders footer", () => {
    // ARRANGE
    const app = shallow(<App />);

    // ACT
    var header = app.find("Footer");

    // ASSERT
    expect(header).not.toBeNull();
  });

  it("renders main", () => {
    // ARRANGE
    const app = shallow(<App />);

    // ACT
    var header = app.find("main");

    // ASSERT
    expect(header).not.toBeNull();
  });
});
