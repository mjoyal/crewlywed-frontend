import React, {useState} from 'react'
import '../styles/TextArea.scss'

export default function TextArea (props) {
  const [charCount, setCharCount] = useState(0);
  const [text, setText] = useState("");

  function updateCharCount(event) {
    //prevents the user from pressing enter 
    if (event.key === "Enter") {
      event.preventDefault();
    }
    
    setCharCount(event.target.value.length);
    
    //if we need to pass up the text area's content
    //it will occur here. can easily be removed if not needed
    if (props.onChange) {
      props.onChange(event.target.value)
    }
  }

  return (
    <div className="bigtext">
      <div className="bigtext__labels">
        <label
          htmlFor={props.label}>
          {props.label}
        </label>
        <p>
          {charCount}/{props.maxCount}
        </p>
      </div>
      <textarea
        className="bigtext__textarea"
        placeholder={props.placeholder}
        name={props.label}
        maxLength={props.maxCount}
        onKeyPress={event => updateCharCount(event)}
      >

      </textarea>
    </div>
  )
}