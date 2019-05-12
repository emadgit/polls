import { compose, withState, withHandlers } from 'recompose';
import { withFormik, FormikProps, FormikErrors } from 'formik';
import { CreateQuestion  as Component } from '../Components/CreateQuestion';
import { postData } from "../../../utils";
import { config } from "../../../config";
import { RouteComponentProps } from "react-router";

export interface QuestionFormValues {
    question: string,
    choices: string
}

interface Handler {
    handleChange: (e: React.FormEvent<HTMLInputElement>) =>void;
}

const withHandlersHOC = withHandlers<WrappedProps, Handler>({
    handleChange: ({setFieldValue}) => (e) => {
        const userInput = e.currentTarget.value;
        setFieldValue(e.currentTarget.name, userInput)
    }
})

interface QuestionState {
    question: string,
    setQuestion: (value: string) => void
}

interface ChoiceState {
    choices: string,
    setChoices: (value: string) => void;
}

const withQuestionStateHOC = withState('question', 'setQuestion', '');
const withChoiceStateHOC = withState('choices', 'setChoices', '');

export type WrappedProps = FormikProps<QuestionFormValues> & QuestionState & ChoiceState & Handler & RouteComponentProps;

const withQuestionFormHOC = withFormik<{}, WrappedProps>({
    validate: (values: QuestionFormValues) => {
        let errors: FormikErrors<QuestionFormValues> = {};
        if (!values.question) {
          errors.question = 'Required';
        } 
        if (!values.choices) {
            errors.choices = 'Required';
          } 
        return errors;
      },
    handleSubmit: ({question, choices})  => {
        const body = {
            "question": question,
            "choices": choices.split(',')
        }
        postData(`${config.API_URL}/questions?page=1`, body)
      .then(data => {
        console.log("Data : ", data)
      }) 
      .catch(error => console.error(error));
      },
})

const enhance = compose<WrappedProps, {}>(
    withQuestionStateHOC,
    withChoiceStateHOC,
    withHandlersHOC,
    withQuestionFormHOC
)

export const CreateQuestion = enhance(Component)
