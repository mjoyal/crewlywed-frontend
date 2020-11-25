import Timer from '../../Timer';
import Question from '../../Question';
import TextArea from '../../TextArea';
import Button from '../../Button';
import React, {useState} from 'react';


export default function InputAnswerPage (props) {
  const [disabledState, setDisabledState] = useState(true);
  const submitAnswer = () => {
    console.log('submit answer!')
  };

  const enableButton = (value) => {
    if(!value) {
      return setDisabledState(true);
    }
    setDisabledState(false);
  };

  return (
    <main>
      
      {/* <Question avatar="images/avatar1.png" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>
      <Timer time={60} width={18}/> */}
      <TextArea label="your response" placeholder="enter your response here..." maxCount={50} onChange={enableButton}/>
      <Button 
        confirm 
        onClick={submitAnswer}
        disabled={disabledState}
      >submit answer!</Button>
 
    </main>
    
  );
};