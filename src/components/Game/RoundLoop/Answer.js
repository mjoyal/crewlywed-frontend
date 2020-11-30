import Timer from '../../Timer';
import Question from '../../Question';
import TextArea from '../../TextArea';
import Button from '../../Button';
import React, {useState} from 'react';
import ButtonContainer from '../../ButtonContainer';


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
    <main style={{width:"100%"}}>
      
      {/* <Question avatar="images/avatar1.png" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>
      <Timer time={60} width={18}/> */}
      <TextArea label="your response" placeholder="enter your response here..." maxCount={70} onChange={handleTextArea}/>
      <ButtonContainer>
        <Button 
          confirm 
          onClick={sendAnswer}
          disabled={disabledState}
        >submit answer!</Button>
      </ButtonContainer>
 
    </main>
    
  );
};