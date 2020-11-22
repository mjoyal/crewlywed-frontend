import React, {useState} from 'react'

export default function TextArea (props) {
  const [charCount, setCharCount] = useState(0)

  function updateCharCount(event) {
    setCharCount(event.target.value.length);

    //if we need to pass up the text area's content
    //it will occur here. can easily be removed if not needed
    if (props.onChange) {
      props.onChange(event.target.value)
    }
  }

  return (
    <div>
      <label
        for={props.label}>
        {props.label}
      </label>
      <p>
        {charCount}/{props.maxCount}
      </p>
      <textarea
        placeholder={props.placeholder}
        name={props.label}
        onChange={event => updateCharCount(event)}
      >

      </textarea>
    </div>
  )
}