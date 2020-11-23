import React, {useState} from 'react';
import classNames from 'classnames';

export default function TextInput (props) {
  const [charCount, setCharCount] = useState(0);
  const [isFull, setIsFull] = useState(false);

  const textInputClass = classNames("littletext", {
    "littletext--full" : isFull
  });

  function updateCharCount(event) {    
    if (event.target.value.length >= props.maxCount && !isFull) {
      setIsFull(true);
      setTimeout( () => {
        setIsFull(false);
      }, 2000);
    }
    setCharCount(event.target.value.length);
    
    //if we need to pass up the TextInput's content
    //it will occur here. can easily be removed if not needed
    if (props.onChange) {
      props.onChange(event.target.value)
    }
  }
  
  return (
    <div className={textInputClass}>
      <div>
        <label
          htmlFor={props.label}>
          {props.label}
        </label>
        <p>
          {charCount}/{props.maxCount}
        </p>
      </div>
      <input
        type="text"
        placeholder={props.placeholder}
        onInput={updateCharCount}
        maxLength={props.maxCount}
        />
      
    </div>
  )
}