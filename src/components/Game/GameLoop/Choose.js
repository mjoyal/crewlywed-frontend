import React from 'react';

import AnswerCard from '../../AnswerCard';


export default function ChooseAnswerPage (props) {

  return (
    <form>
      {
        props.answerOptions.map( option => <AnswerCard
          
          />)
      }
    </form>
  );
}