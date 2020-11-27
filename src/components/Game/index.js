import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import "../../styles/partials/_global.scss";


import Lobby from './Lobby';
import GameLoop from './GameLoop/roundIndex.js'
import FinalScore from './FinalScore';

const LOBBY = 'LOBBY';
const GAMELOOP = 'GAMELOOP';
const FINALSCORE = 'FINALSCORE';

export default function Game (props) {
  const params = useParams();

  
  return (
    <div className="game">
      <h2>crewlywed</h2>
      {/* <p>This is the game controller! {params.id}</p> */}
      {props.gameState === LOBBY && 
        <Lobby
          roomCode={params.id}
          players={props.players}
          host={props.userProfile.creator}
          lobbyInfo={props.lobbyInfo}
          startGame={props.startGame}
        />
      }
      { props.gameState === GAMELOOP && 
        <GameLoop 
          name="mac"
          roundState={props.roundState}
          submitUserAnswer={props.submitUserAnswer}
        />}
      {props.gameState === FINALSCORE && <FinalScore />}
    </div>
  );
}