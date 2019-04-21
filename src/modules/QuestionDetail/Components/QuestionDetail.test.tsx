import * as React from "react";
import { shallow } from "enzyme";
import { QuestionDetail } from "./QuestionDetail";

let mock: any = jest.fn();

const mockData = {
  history: { mock },
  location: {
    state: {
      question: {
        choices: [
          {
            choice: "TEST",
            url: "/questions/7/choices/54",
            votes: 213
          }
        ],
        published_at: "2015-05-27T21:22:26.601000+00:00",
        question: "Bacon?",
        url: "/questions/7"
      }
    }
  },
  match: { mock },
  handleVote: jest.fn(),
  handleClose: { mock },
  setShowSnackbar: { mock },
  showSnackbar: { mock }
};

// @ts-ignore
const component = shallow(<QuestionDetail {...mockData} />);

describe("QuestionDetail Component", () => {
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
