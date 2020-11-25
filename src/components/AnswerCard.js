import "../styles/AnswerCard.scss";
import {useState} from 'react';

export default function AnswerCard (props) {
  // const [checked, setChecked] = useState(null)

  // const styleChecked = function () {
  //   if(checked) {
  //     return setChecked(null)
  //   }
  //   return setChecked('checked')
  // };

  return (
    <div className={`answerCard ${props.checked}`}>
      <label className="container">
        <input type="checkbox" checked={props.checked}/>
        <span className="checkmark"></span>
      </label>
      <p>{props.answer}</p>
    </div>
  ); 
};