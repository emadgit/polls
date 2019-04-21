import { withHandlers, withState, compose } from "recompose";
import { QuestionDetail as Component } from "../Components/QuestionDetail";
import { RouteComponentProps } from "react-router";
import { config } from "../../../config";
import { postData } from "../../../utils";
import { Question } from '../../../Interface/Question';
import cloneDeep from 'lodash/cloneDeep';

interface Handler {
  handleVote: (cId: string, i: number) => void;
  handleClose: () => void;
}

interface State {
  showSnackbar: boolean;
  setShowSnackbar: (value: boolean) => void;
}

interface QuestionState {
    question: Question,
    setQuestion: (value: Question) => void;
}

const withStateHOC = withState("showSnackbar", "setShowSnackbar", false);
const withQuestionStateHOC = withState("question", "setQuestion", {});

const withHandlerHOC = withHandlers<WrappedProps, Handler>({
  handleVote: ({ setShowSnackbar, setQuestion, question }) => (cId: string, i:number) => {
    postData(`${config.API_URL}${cId}`)
      .then(data => {
        let cloneItem = cloneDeep(question)
        cloneItem.choices[i].votes = data.votes;
        setQuestion(cloneItem)
        setShowSnackbar(true);
      }) // JSON-string from `response.json()` call
      .catch(error => console.error(error));
  },
  handleClose: ({ history, setShowSnackbar }) => () => {
    setShowSnackbar(false);
    history.goBack();
  }
});

export type WrappedProps = RouteComponentProps & Handler & State & QuestionState;

const enhance = compose<WrappedProps, {}>(
  withStateHOC,
  withQuestionStateHOC,
  withHandlerHOC
);

export const QuestionDetail = enhance(Component);
