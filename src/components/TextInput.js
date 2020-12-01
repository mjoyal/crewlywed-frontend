import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import '../styles/TextInput.scss';

export default function TextInput (props) {
  const [charCount, setCharCount] = useState(0);
  const [isFull, setIsFull] = useState(false);

  const textInputClass = classNames("littletext", {
    "littletext--full" : isFull
  });

  
  function setError() {
    setIsFull(true);
    setTimeout( () => {
      setIsFull(false);
    }, 2000);
  }
  
  useEffect(() => {
    if(props.error) {
      setError()
    }
  }, [props.error]);

  function checkIsFull(event) {
    //will temporarily add error state styling to component
    if (event.target.value.length >= props.maxCount && !isFull) {
      setError()
    }
  }
  
  function updateCharCount(event) {    
    setCharCount(event.target.value.length);
    
    //if we need to pass up the TextInput's content
    //it will occur here. can easily be removed if not needed
    if (props.onChange) {
      props.onChange(event.target.value)
    }
  }

  return (
    <div className={textInputClass}>
      <div className="littletext__labels">
        <label
          htmlFor={props.label}>
          {props.label}
        </label>
        <p>
          {charCount}/{props.maxCount}
        </p>
      </div>
      <input
        className="littletext__input"
        type="text"
        placeholder={props.placeholder}
        onInput={updateCharCount}
        onKeyPress={checkIsFull}
        maxLength={props.maxCount}
        />
      {
        props.error && <p className="littletext__error"> {props.error} </p>
      }
    </div>
  )
}