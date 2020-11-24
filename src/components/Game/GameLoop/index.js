import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import Question from '../../Question';
import Timer from '../../Timer';

const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";

export default function GameLoop (props) {
  const params = useParams();
  const [gameState, setGameState] = useState(ANSWER);
  console.log(params);
  return (
    <div>
      {gameState !== ROUNDSCORE && <>
        <Question avatar="images/avatar3.png" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>
        <Timer time={60} width={30}></Timer>
      </>}
    </div>
  );
}