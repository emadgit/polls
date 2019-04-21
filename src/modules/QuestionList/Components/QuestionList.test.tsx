import * as React from "react";
import { shallow } from "enzyme";
import { QuestionList } from "./QuestionList";

const mockData = {
  questions: [
    {
      url: "/questions/10",
      published_at: "2015-05-27T21:22:26.670000+00:00",
      question: "Game Genre",
      choices: [
        {
          url: "/questions/10/choices/70",
          votes: 1193,
          choice: "Shooter"
        },
        {
          url: "/questions/10/choices/69",
          votes: 402,
          choice: "Action"
        },
        {
          url: "/questions/10/choices/74",
          votes: 258,
          choice: "Strategy"
        },
        {
          url: "/questions/10/choices/71",
          votes: 236,
          choice: "Action-adventure"
        },
        {
          url: "/questions/10/choices/75",
          votes: 209,
          choice: "Sports"
        },
        {
          url: "/questions/10/choices/73",
          votes: 203,
          choice: "Simulation"
        },
        {
          url: "/questions/10/choices/72",
          votes: 179,
          choice: "Role-playing"
        }
      ]
    },
    {
      url: "/questions/9",
      published_at: "2015-05-27T21:22:26.648000+00:00",
      question: "Favourite hot beverage?",
      choices: [
        {
          url: "/questions/9/choices/65",
          votes: 404,
          choice: "Tea"
        },
        {
          url: "/questions/9/choices/67",
          votes: 184,
          choice: "Apple Cider"
        },
        {
          url: "/questions/9/choices/66",
          votes: 158,
          choice: "Coffee"
        },
        {
          url: "/questions/9/choices/68",
          votes: 146,
          choice: "Hot Chocolate"
        }
      ]
    }
  ]
};

// @ts-ignore
const component = shallow(<QuestionList {...mockData} />);

describe("QuestionList Component", () => {
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
