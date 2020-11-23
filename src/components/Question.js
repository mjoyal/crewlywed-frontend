
import React from 'react'; 
import "../styles/Question.scss";
import classNames from 'classnames';

export default function Question (props) {
  const questionClass = classNames('question');
  const name = React.cloneElement(props.children[1], {className: props.spanClass});

  return (
    <div className={questionClass}>
      <img src={`${props.avatar}`} alt="player avatar"/>
      <p>
      {props.children[0]}
      {name}
      {props.children[2]}
      </p>
    </div>

  ); 
};