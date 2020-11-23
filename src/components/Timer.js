import "../styles/Timer.scss";
import {useEffect, useState} from 'react';

export default function Timer (props) {
  const [time, setTime] = useState(props.time);
  const [indicator, setIndicator] = useState(0); 

  useEffect(() => {
    const timer = function () {
      setTime(time - 1);
    };
    time > 0 && setTimeout(timer, 1000);
  }, [time]);

  return (
    <div className="timer-container">
    <div className="timer">
      <div className="timer-indicator" style={{width: `${20}em`}}>
      </div>
    </div>
    <span>{time}s</span>
    </div>
  ); 
};