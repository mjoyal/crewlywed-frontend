import React, {useState} from 'react';

import AnswerCard from '../../AnswerCard';
import Button from '../../Button';
import ButtonContainer from '../../ButtonContainer';


export default function ChooseAnswerPage (props) {
  const [answerID, setAnswerID] = useState(null);

  return (
    <>
      <h2 style={{fontWeight:'normal', textAlign:"center"}}> choose {props.name}'s answer! </h2>
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
        <ButtonContainer>
          <Button disabled={answerID === null} onClick={props.sendChoice}>
            choose answer
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
}