import React from 'react';
import '../styles/ButtonContainer.scss';

export default function ButtonContainer(props) {

  return (
    <div className="button-container">
      {props.children}

    </div>
  );
}