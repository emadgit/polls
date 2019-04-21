import * as React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
describe("Home Component", () => {
  it("should render correctly", () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
