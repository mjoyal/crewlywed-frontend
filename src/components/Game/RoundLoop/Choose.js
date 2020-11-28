import React, {useEffect, useState} from 'react';

import AnswerCard from '../../AnswerCard';
import Button from '../../Button';
import ButtonContainer from '../../ButtonContainer';
import Message from '../../Message';

export default function ChooseAnswerPage (props) {
  const [answerID, setAnswerID] = useState(null);

  const handleSubmit = () => {
    // send user submission / choice up to the hook 
    props.sendChoice(answerID); 
  }
  
  return (
    <>
      <Message name={props.name} victim={props.isVictim}/>
      <form
        onSubmit={(event) => event.preventDefault()}>
        {
          props.answerOptions.map( (option, index) => <AnswerCard
            key={index}
            checked={option.id === answerID}
            onChange={setAnswerID} 
            id={option.id}
            answer={option.text}
            isVictim={props.isVictim}
            />)
        }
        {/* dont show the button to victim */}
        { !props.isVictim && 
          <ButtonContainer>
          <Button disabled={answerID === null} onClick={handleSubmit}>
            choose answer
          </Button>
          </ButtonContainer>
        }
      </form>
    </>
  );
}