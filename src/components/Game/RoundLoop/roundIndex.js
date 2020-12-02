import React, { useEffect, useState } from 'react';


import Question from '../../Question';
// import Timer from '../../Timer';

import SimpleTimer from '../../SimpleTimer';
import RoundScore from './RoundScore';
import "../../../styles/partials/_global.scss";
import InputAnswerPage from './Answer.js';
import ChooseAnswerPage from './Choose';
import RevealAnswerPage from './Reveal';
import AwaitResponsePage from './Await';


const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";


export default function RoundLoop (props) {
  const [hideTimer, setHideTimer] = useState(false); 

  useEffect(() => {
    if(props.roundState === REVEAL || props.roundState === ROUNDSCORE) {
      return setHideTimer(true); 
    }
    setHideTimer(false);
  }, [props.roundState]);; 

  return (
    <div className="roundLoop">
      {props.roundState !== ROUNDSCORE && <>
        <Question
          victimAvatar={`images/avatar${props.victimAvatarId}.png`}
          victimColorClass={props.victimColorClass}
          question={props.question}
          questionVictimText={props.questionVictimText}
          victimName={props.victimName}
          isVictim={props.isVictim}
        />
        <SimpleTimer
          time={15} 
          currentRoundNum={props.currentRoundNum}
          totalRounds={props.totalRounds}
          hide={hideTimer}
        />
      </>}
      {props.roundState === ROUNDSCORE && <>
        <RoundScore scoreData={props.roundScoreState}/>
      </>}

      {props.roundState === ANSWER && 
      <InputAnswerPage 
        submitUserAnswer={props.submitUserAnswer}  
        currentRoundNum={props.currentRoundNum}
        totalRounds={props.totalRounds}
      />}

      {props.roundState  === CHOOSE && 
      <ChooseAnswerPage 
        answerOptions={props.currentSubmissions} 
        victimName={props.victimName} 
        sendChoice={props.sendChoice} 
        isVictim={props.isVictim}
        userID={props.userID}
        currentRoundNum={props.currentRoundNum}
        totalRounds={props.totalRounds}
      />}

      {props.roundState  === REVEAL && <RevealAnswerPage answerResults={props.revealState}/>}
      {props.roundState === AWAIT && <AwaitResponsePage players={props.awaitState}/>}

    </div>
  );
}