import SimpleTimer from '../../SimpleTimer';
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
      <SimpleTimer
          time={10}
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