import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import Question from '../../Question';
import Timer from '../../Timer';
import RoundScore from './RoundScore';
import "../../../styles/partials/_global.scss";
import InputAnswerPage from './Answer.js';
import ChooseAnswerPage from './Choose';

const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";

//test data
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

export default function GameLoop (props) {
  const params = useParams();
  const [gameState, setGameState] = useState(CHOOSE);
  console.log(params);
  return (
    <div className="gameLoop">
      <h2>crewlywed</h2>
      {gameState !== ROUNDSCORE && <>
        <Question avatar="images/avatar3.png" spanClass="span-1">how would <span>{props.name}</span> survive the apocalypse?</Question>
        <Timer time={60} width={18}></Timer>
      </>}
      {gameState === ROUNDSCORE && <>
        <RoundScore/>
      </>}
      {gameState === ANSWER && <>
        <InputAnswerPage/>
      </>}
      {gameState === CHOOSE && <ChooseAnswerPage answerOptions={answerOptions} name={props.name}/>}
    </div>
  );
}