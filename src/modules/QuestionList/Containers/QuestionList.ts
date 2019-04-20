import { withState, lifecycle, compose } from 'recompose';
import { QuestionList as Component } from '../Components/QuestionList';
import { Question } from '../../../Interface/Question';
import { config } from '../../../config';
export interface States {
    questions: [Question],
    setQuestions: (value:[Question]) => void;
}

const withStateHOC = withState('questions', 'setQuestions', []);
const withLifeCycleHOC = lifecycle<WrappedProps, {}>({
     componentDidMount(){
        fetch(`${config.API_URL}/questions`)
        .then(response => response.json())
        .then(data => this.props.setQuestions(data));
    }     
})

export type WrappedProps = States;

const enhance = compose<WrappedProps, {}> (
    withStateHOC,
    withLifeCycleHOC
)

export const QuestionList = enhance(Component); 
