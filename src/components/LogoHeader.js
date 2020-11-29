import React from 'react';
import classNames from 'classnames';
import "../styles/partials/_global.scss";

export default function LogoHeader (props) {
  // use classNames package to manage different types of button styles
  const logoClass = classNames(
    {'logo-big': props.big}, 
    {'logo-small': props.small},
    {'logo-text': props.text},
  ); 

  return (
    <>
    {!props.text && 
      <img className={logoClass} src="images/logo.png" alt="logo"/>
    }
    {props.text && 
      <img className={logoClass} src="images/logo-text.png" alt="text logo"/>
    }
    </>
  ); 
}