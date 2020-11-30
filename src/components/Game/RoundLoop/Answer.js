import Timer from '../../Timer';
import Question from '../../Question';
import TextArea from '../../TextArea';
import Button from '../../Button';
import React, {useState} from 'react';


export default function InputAnswerPage (props) {
  const [disabledState, setDisabledState] = useState(true);
  const [textAreaValue, setTextAreaValue] = useState(''); 

  const handleTextArea = (value) => {
    if(!value) {

      // disable button if textarea empty
      return setDisabledState(true);
    }

    setTextAreaValue(value); 
    // enable button if value in texterea
    setDisabledState(false);
  };

  const sendAnswer = () => {
    props.submitUserAnswer(textAreaValue); 
  };
  return (
    <main>
      
      {/* <Question avatar="images/avatar1.png" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>
      <Timer time={60} width={18}/> */}
        <Timer
          time={10} width={18}
          currentRoundNum={props.currentRoundNum}
          totalRounds={props.totalRounds}
        />
      <TextArea label="your response" placeholder="enter your response here..." maxCount={50} onChange={handleTextArea}/>
      <Button 
        confirm 
        onClick={sendAnswer}
        disabled={disabledState}
      >submit answer!</Button>
 
    </main>
    
  );
};