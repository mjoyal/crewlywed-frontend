import React from 'react';
import { useParams } from 'react-router-dom';

import Lobby from './Lobby';

const LOBBY = 'LOBBY';
const GAMELOOP = 'GAMELOOP';
const FINALSCORE = 'FINALSCORE';

export default function GameLoop (props) {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>This is the game controller! {params.id}</p>
      {LOBBY && 
        <Lobby roomCode={params.id} players={props.players} host={true}/>
      }

    </div>
  );
}