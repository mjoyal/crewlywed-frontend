import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import Question from '../../Question';
import Timer from '../../Timer';
import RoundScore from './RoundScore';
import "../../../styles/partials/_global.scss";
import InputAnswerPage from './Answer.js';

const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";

export default function GameLoop (props) {
  const params = useParams();
  const [gameState, setGameState] = useState(ROUNDSCORE);
  console.log(params);
  return (
    <div className="gameLoop">
      <h2>crewlywed</h2>
      {gameState !== ROUNDSCORE && <>
        <Question avatar="images/avatar3.png" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>
        <Timer time={60} width={30}></Timer>
      </>}
      {gameState === ROUNDSCORE && <>
        <RoundScore/>
      {gameState === ANSWER && <>
        <InputAnswerPage/>
      </>}
    </div>
  );
}