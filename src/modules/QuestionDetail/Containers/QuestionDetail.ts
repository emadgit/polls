import { withHandlers, withState, compose } from "recompose";
import { QuestionDetail as Component } from "../Components/QuestionDetail";
import { RouteComponentProps } from "react-router";
import { config } from "../../../config";
import { postData } from "../../../utils";
interface Handler {
  handleVote: (cId: string) => void;
  handleClose: () => void;
}

interface State {
  showSnackbar: boolean;
  setShowSnackbar: (value: boolean) => void;
}

const withStateHOC = withState("showSnackbar", "setShowSnackbar", false);

const withHandlerHOC = withHandlers<WrappedProps, Handler>({
  handleVote: ({ setShowSnackbar }) => (cId: string) => {
    postData(`${config.API_URL}${cId}`)
      .then(data => {
        setShowSnackbar(true);
      }) // JSON-string from `response.json()` call
      .catch(error => console.error(error));
  },
  handleClose: ({ history, setShowSnackbar }) => () => {
    setShowSnackbar(false);
    history.goBack();
  }
});

export type WrappedProps = RouteComponentProps & Handler & State;

const enhance = compose<WrappedProps, {}>(
  withStateHOC,
  withHandlerHOC
);

export const QuestionDetail = enhance(Component);
