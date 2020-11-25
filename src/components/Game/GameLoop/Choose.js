import React, {useState} from 'react';

import AnswerCard from '../../AnswerCard';


export default function ChooseAnswerPage (props) {
  const [answerID, setAnswerID] = useState(null);

  return (
    <form>
      {
        props.answerOptions.map( option => <AnswerCard
          checked={option.id === answerID}
          onChange={setAnswerID} 
          id={option.id}
          answer={option.answer}      
          />)
      }
    </form>
  );
}