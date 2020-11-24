import React from 'react';
import { useParams } from 'react-router-dom';

import Lobby from './Lobby';


export default function GameLoop (props) {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>This is the game controller! {params.id}</p>
      <Lobby roomCode={params.id} players={props.players}/>

    </div>
  );
}