import React from 'react';
import classNames from 'classnames';


export default function LogoHeader (props) {
  // use classNames package to manage different types of button styles
  const logoClass = classNames(
    {'logo-big': props.big}, 
    {'logo-small': props.small},
    {'logo-small': props.text},
  ); 

  return (
    <>
    {!props.text && 
      <img src="images/logo.png" alt="logo"/>
    }
    {props.text && 
      <img src="images/logo-text.png" alt="text logo"/>
    }
    </>
  ); 
}