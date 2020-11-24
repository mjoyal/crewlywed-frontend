import React from 'react';
import "../styles/NameCard.scss";
import classNames from 'classnames';

//we actually do need classNames for a grey-out state for the await page

export default function NameCard (props) {
  const nameCardClass = classNames('nameCard'); 
  return (
    <div className={nameCardClass}>
      <div>
        <img src={`${props.avatar}`} alt="player avatar"/>
        <p>{props.playerName}</p>
      </div>
      {props.host && (
        <img src="https://bit.ly/36ZTJgj" alt="host icon"/>
      )}
    </div>
  ); 
};