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
    <>
    { !props.isVictim && 

      <div className={`answerCard${props.checked ? ' checked' : ''}`}
      onClick={() => props.onChange(props.id)}>
        <label className="container">
          <input type="checkbox" checked={props.checked}/>
          <span className="checkmark"></span>
        </label>
        <p>{props.answer}</p>
      </div>
    }

    {
      props.isVictim && 
      <div className="answerCard">
        <p>{props.answer}</p>
      </div>
    }
  </>
  ); 
};