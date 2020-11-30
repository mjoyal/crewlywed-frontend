import {useEffect, useState} from 'react';
import "../styles/Timer.scss";


export default function SimpleTimer (props) {
  const [time, setTime] = useState(props.time);
  const [display, setDisplay] = useState('flex')
  
  useEffect(() => {
    if(props.hide) {
      return setDisplay('none'); 
    }
    return setDisplay('flex'); 
  }, [props.hide])
  
  useEffect(() => {
    const timer = function () {
      setTime((prev) => {
        return prev - 1; 
      })
    };
    if(time > 0) {
     return setTimeout(timer, 1000);
    } else if (time === 0) {
      clearTimeout(timer); 
      setTime(props.time); 
    }
    
  }, [time]);

  return (
    <div className="simple-timer-container" style={{display: display}}>
      <p className="question-number">question {props.currentRoundNum} / {props.totalRounds}</p>
      <span>Time: {time}s</span>
    </div>
  ); 
};