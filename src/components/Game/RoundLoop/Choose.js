import React, {useEffect, useState} from 'react';

import AnswerCard from '../../AnswerCard';
import Button from '../../Button';
import ButtonContainer from '../../ButtonContainer';


export default function ChooseAnswerPage (props) {
  const [answerID, setAnswerID] = useState(null);

  const handleSubmit = () => {
    // send user submission / choice up to the hook 
    props.sendChoice(answerID); 
  }
  
  return (
    <>
      <h2 style={{fontWeight:'normal', textAlign:"center"}}> choose {props.name}'s answer! </h2>
      <form
        onSubmit={(event) => event.preventDefault()}>
        {
          props.answerOptions.map( (option, index) => <AnswerCard
            key={index}
            checked={option.id === answerID}
            onChange={setAnswerID} 
            id={option.id}
            answer={option.text}     
            />)
        }
        <ButtonContainer>
          <Button disabled={answerID === null} onClick={handleSubmit}>
            choose answer
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
}