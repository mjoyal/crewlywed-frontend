import React from 'react';

import QuestionResult from '../../QuestionResult';

export default function RevealAnswerPage (props) {

  return (
    <>
      <h2> round complete </h2>
      {
        props.answerResults.map(answer => <QuestionResult 
          {...answer} />)
      }
    </>
  )
}