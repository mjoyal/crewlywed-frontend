import {useEffect, useState} from 'react';
import "../styles/Timer.scss";


export default function SimpleTimer (props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const timer = function () {
      setTime((prev) => {
        return prev - 1; 
      })
    };
    time > 0 && setTimeout(timer, 1000);
  }, [time]);

  return (
    <div className="simple-timer-container">
      <p class="question-number">question {props.currentRoundNum} / {props.totalRounds}</p>
      <span>Time: {time}s</span>
    </div>
  ); 
};