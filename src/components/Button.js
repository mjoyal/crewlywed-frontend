import React from 'react';
import classNames from 'classnames';
import "../styles/Button.scss";

export default function Button (props) {
  // use classNames package to manage different types of button styles
  const buttonClass = classNames(
    'button',
    {'button-confirm': props.confirm}, 
    {'button-danger': props.danger},
    {'button-disabled': props.disabled}
  ); 
  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    > 
    {props.children}
    </button>
  ); 
}