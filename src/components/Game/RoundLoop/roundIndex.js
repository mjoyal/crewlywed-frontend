import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import Question from '../../Question';
import Timer from '../../Timer';
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

  return (
    <div className="roundLoop">
      {props.roundState !== ROUNDSCORE && <>
        <Question
          victimAvatar={`images/avatar${props.victimAvatarId}.png`}
          victimColorClass={props.victimColorClass}
          question={props.question}
          victimName={props.victimName}
          isVictim={props.isVictim}
        />
        
        <Timer
          time={60} width={18}
          currentRoundNum={props.currentRoundNum}
          totalRounds={props.totalRounds}
        />
      </>}
      {props.roundState === ROUNDSCORE && <>
        <RoundScore scoreData={props.roundScoreState}/>
      </>}

      {props.roundState === ANSWER && <InputAnswerPage submitUserAnswer={props.submitUserAnswer}/>}
      {props.roundState  === CHOOSE && 
      <ChooseAnswerPage 
        answerOptions={props.currentSubmissions} 
        victimName={props.victimName} 
        sendChoice={props.sendChoice} 
        isVictim={props.isVictim}
        userID={props.userID}
      />}

      {props.roundState  === REVEAL && <RevealAnswerPage answerResults={props.revealState}/>}
      {props.roundState === AWAIT && <AwaitResponsePage players={props.awaitState}/>}

    </div>
  );
}