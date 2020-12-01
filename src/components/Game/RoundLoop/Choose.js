import React, {useState} from 'react';

import AnswerCard from '../../AnswerCard';
import Button from '../../Button';
import ButtonContainer from '../../ButtonContainer';
import Message from '../../Message';
import SimpleTimer from '../../SimpleTimer';

export default function ChooseAnswerPage (props) {
  const [answerID, setAnswerID] = useState(null);

  const handleSubmit = () => {
    // send user submission / choice up to the hook 
    props.sendChoice(answerID); 
  }
  

  return (
    <>
      <Message name={props.name} victim={props.isVictim} victimName={props.victimName}/>
      <form
        onSubmit={(event) => event.preventDefault()}>
        <div className="answer-list">
          {
            props.answerOptions.map( (option, index) => <AnswerCard
              key={index}
              checked={option.id === answerID}
              onChange={setAnswerID} 
              id={option.id}
              answer={option.text}
              isVictim={props.isVictim}
              isUserAnswer={option.submitter_id === props.userID}
              />)
          }
        </div>
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