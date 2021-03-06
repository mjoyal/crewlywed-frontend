import React from 'react';
import "../styles/NameCard.scss";
import classNames from 'classnames';

//we actually do need classNames for a grey-out state for the await page

export default function NameCard (props) {
  const nameCardClass = classNames('nameCard', {
    "nameCard--inactive":!props.active
  }); 
  return (
    <div className={nameCardClass}>
      <div>
        <img src={`/images/avatar${props.avatarID}.png`} alt="player avatar"/>
        <p>{props.username}</p>
      </div>
      {props.host && (
        <img className="host-icon" src="images/hostIcon.png" alt="host icon"/>
      )}
    </div>
  ); 
};