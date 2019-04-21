import * as React from "react";
import { shallow } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";
import { QuestionDetail } from "./QuestionDetail";
import Button from "@material-ui/core/Button";

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

  it("should render one vote button", async () => {
    expect(component.find(Button).length).toBe(1);
  });
});
