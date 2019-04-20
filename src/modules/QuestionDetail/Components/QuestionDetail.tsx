import React, {useEffect, FunctionComponent} from 'react'
import { RouteComponentProps } from 'react-router';
import { Question } from '../../../Interface/Question'

const QuestionDetail: FunctionComponent<RouteComponentProps> = () => {
    const data:Question = history.state.state.question;

  return (
    <div>
        {data.question}
    </div>
  )
}

export default QuestionDetail;