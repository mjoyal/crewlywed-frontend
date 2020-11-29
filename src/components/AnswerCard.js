import "../styles/AnswerCard.scss";
import {useState} from 'react';

export default function AnswerCard (props) {

  const notVictimAnswer = props.isVictim && !props.isUserAnswer; 
  const notUserAnswer = !props.isVictim && !props.isUserAnswer;
  console.log()
  return (
    <>
    { notUserAnswer && 

      <div className={`answerCard${props.checked ? ' checked' : ''}`}
      onClick={() => props.onChange(props.id)}>
        <label className="container">
          <input type="checkbox" checked={props.checked}/>
          <span className="checkmark"></span>
        </label>
        <p>{props.answer}</p>
      </div>
    }

    {
     notVictimAnswer &&
      <div className="answerCard">
        <p>{props.answer}</p>
      </div>
    }
  </>
  ); 
};