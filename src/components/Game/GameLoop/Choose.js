import React, {useState} from 'react';

import AnswerCard from '../../AnswerCard';
import Button from '../../Button';


export default function ChooseAnswerPage (props) {
  const [answerID, setAnswerID] = useState(null);

  return (
    <form
      onSubmit={(event) => event.preventDefault()}>
      {
        props.answerOptions.map( option => <AnswerCard
          checked={option.id === answerID}
          onChange={setAnswerID} 
          id={option.id}
          answer={option.answer}      
          />)
      }
      <Button disabled={answerID === null}>
        choose answer
      </Button>
    </form>
  );
}