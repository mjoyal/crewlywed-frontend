import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import "../../styles/partials/_global.scss";


import Lobby from './Lobby';
import GameLoop from './GameLoop/index.js'
import FinalScore from './FinalScore';

const LOBBY = 'LOBBY';
const GAMELOOP = 'GAMELOOP';
const FINALSCORE = 'FINALSCORE';

export default function Game (props) {
  const params = useParams();
  const [gameState, setGameState] = useState(LOBBY);
  console.log(params);
  return (
    <div className="game">
      <h2>crewlywed</h2>
      {/* <p>This is the game controller! {params.id}</p> */}
      {gameState === LOBBY && 
        <Lobby roomCode={params.id} players={props.players} host={true}/>
      }
      { gameState === GAMELOOP && <GameLoop name="mac"/>}
      {gameState === FINALSCORE && <FinalScore />}
    </div>
  );
}