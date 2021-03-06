import {useEffect, useState} from 'react';
import "../styles/Timer.scss";
import {motion} from 'framer-motion'; 

export default function SimpleTimer (props) {
  const [time, setTime] = useState(props.time);
  const [display, setDisplay] = useState('flex')
  const [indicator, setIndicator] = useState(0);

 let bar = "timer-indicator"; 
  useEffect(() => {
    if(props.hide) {
      return setDisplay('none'); 
    }
    return setDisplay('flex'); 
  }, [props.hide])
  
  useEffect(() => { //hello friends :) 
    setIndicator(`100%`); 
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
    <article className="simple-timer">
      <p className="question-number" style={{display: display}}>question {props.currentRoundNum} / {props.totalRounds}</p>
      <div className="timer-container" style={{display: display}}>
        <div className="timer">
        <motion.div className={"timer-indicator"} initial={{width: 0}} animate={{width: indicator}} transition={{repeat: 2, ease:'linear', duration: props.time}}></motion.div>
        </div>
        <span>{time}s</span>
      </div>
    </article>


  ); 
};