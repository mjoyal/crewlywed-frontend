import "../styles/Timer.scss";
import {useEffect, useState} from 'react';

export default function Timer (props) {
  const [time, setTime] = useState(props.time);
  const [indicator, setIndicator] = useState(0); 
  
  let bar = "timer-indicator"; 
  useEffect(() => {
    setIndicator(props.width); 
    const timer = function () {
      setTime((prev) => {
        return prev - 1; 
      })
    };
    time > 0 && setTimeout(timer, 1000);
  }, [time]);

  // 
  return (
    <div className="timer-container">
      <p>question {props.currentRoundNum} / {props.totalRounds}</p>
    <div className="timer">
      <div className={bar} style={{width: `${indicator}em`,  transition: `width ${props.time}s ease-in`}}>
      </div>
    </div>
    <span>{time}s</span>
    </div>
  ); 
};