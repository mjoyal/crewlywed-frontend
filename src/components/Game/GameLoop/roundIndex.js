import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import Question from '../../Question';
import Timer from '../../Timer';
import RoundScore from './RoundScore';
import "../../../styles/partials/_global.scss";
import InputAnswerPage from './Answer.js';
import ChooseAnswerPage from './Choose';
import RevealAnswerPage from './Reveal'

const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";

// test data
const answerOptions = [
  {
    answer:"skateboard away",
    id:1
  },
  {
    answer:"sass the zombies away",
    id:2
  },
  {
    answer:"form a tribe full of babes",
    id:3
  }
]

const answerResults = [
  {
    playerName:"mac",
    avatarID:1,
    correct:true,
    answer:"form a tribe full of babes",
    choosers:[
      { 
        name: "will",
        avatarID: 2
      },
      { 
        name: "chantal",
        avatarID: 3
      }
    ]
  },
  {
    playerName:"will",
    avatarID:2,
    correct:false,
    answer:"skateboard away",
    choosers:[
      { 
        name: "will",
        avatarID: 2
      },
      { 
        name: "chantal",
        avatarID: 3
      }
    ]
  }
]

export default function GameLoop (props) {
  // const params = useParams();
 
  return (
    <div className="gameLoop">
      <p>{props.roundState}</p>
      {/* {props.RoundState !== ROUNDSCORE && <>
        <Question avatar="images/avatar3.png" spanClass="span-1">how would <span>{props.name}</span> survive the apocalypse?</Question>
        <Timer time={60} width={18}></Timer>
      </>} */}
      {props.roundState === ROUNDSCORE && <>
        <RoundScore/>
      </>}
      {props.roundState === ANSWER && <InputAnswerPage submitUserAnswer={props.submitUserAnswer}/>}
      {props.roundState  === CHOOSE && <ChooseAnswerPage answerOptions={answerOptions} name={props.name} sendChoice={props.sendChoice}/>}
      {props.roundState  === REVEAL && <RevealAnswerPage answerResults={answerResults}/>}
    </div>
  );
}