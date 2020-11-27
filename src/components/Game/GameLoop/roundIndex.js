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

const responseTest = [
  {id: 1, avatarID: 1, username:'mac', creator:true, answered:true},
  {id: 2, avatarID: 2, username:'mac', creator:false, answered:false},
  {id: 3, avatarID: 3, username:'mac', creator:false, answered:false},
  {id: 4, avatarID: 4, username:'mac', creator:false, answered:false},
  {id: 5, avatarID: 5, username:'mac', creator:false, answered:false}
];

export default function GameLoop (props) {
  const params = useParams();
  const [gameState, setGameState] = useState(ANSWER);
  console.log(params);
  return (
    <div className="gameLoop">
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
      {gameState === AWAIT && <AwaitResponsePage players={responseTest}/>}
      {gameState === CHOOSE && <ChooseAnswerPage answerOptions={answerOptions} name={props.name}/>}
      {gameState === REVEAL && <RevealAnswerPage answerResults={answerResults}/>}
    </div>
  );
}