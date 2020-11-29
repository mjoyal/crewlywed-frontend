import React from 'react'; 
import "../styles/Question.scss";

export default function Question (props) {
  const questionParts = props.question.split('$name');
  console.log(props.victimName); 
  return (
    <div className="question">
      <img src={`${props.victimAvatar}`} alt="player avatar"/>
      {!props.isVictim && <p>{questionParts[0]}<span className={props.victimColorClass}>{props.victimName}</span>{questionParts[1]}</p>}
      {props.isVictim && <p>{questionParts[0]}<span className={props.victimColorClass}>{props.victimName}</span>{questionParts[1]} (that's you!)</p>}
    </div>
  ); 
};