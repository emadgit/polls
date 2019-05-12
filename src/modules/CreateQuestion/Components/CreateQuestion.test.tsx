import * as React from "react";
import { shallow } from "enzyme";
import { CreateQuestion } from "./CreateQuestion";

let mock: any = jest.fn();

const mockData = {
  values: {
    question: "",
    choices: ""
  },
  errors: {
    question: "",
    choices: ""
  }
};

// @ts-ignore
const component = shallow(<CreateQuestion {...mockData} />);

describe("CreateQuestion Component", () => {
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
