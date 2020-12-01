import React from 'react';

import QuestionResult from '../../QuestionResult';

export default function RevealAnswerPage (props) {

  return (
    <>
      <h2 style={{margin:'1rem 0rem'}}> round complete </h2>
      <div className="reveal-list">
        { props.answerResults && props.answerResults.length > 0 &&
          props.answerResults.map(answer => <QuestionResult 
            {...answer} />)
        }
      </div>
    </>
  )
}