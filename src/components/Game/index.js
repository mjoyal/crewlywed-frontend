import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Lobby from './Lobby';
import GameLoop from './GameLoop/index.js'

const LOBBY = 'LOBBY';
const GAMELOOP = 'GAMELOOP';
const FINALSCORE = 'FINALSCORE';

export default function Game (props) {
  const params = useParams();
  const [gameState, setGameState] = useState(GAMELOOP);
  console.log(params);
  return (
    <div>
      {/* <p>This is the game controller! {params.id}</p> */}
      {gameState === LOBBY && 
        <Lobby roomCode={params.id} players={props.players} host={true}/>
      }
      { GAMELOOP && <GameLoop />}
    </div>
  );
}