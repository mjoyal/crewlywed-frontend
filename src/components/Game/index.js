import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import "../../styles/partials/_global.scss";


import Lobby from './Lobby';
import RoundLoop from './RoundLoop/roundIndex.js'
import FinalScore from './FinalScore';
import LogoHeader from '../LogoHeader';

const LOBBY = 'LOBBY';
const ROUNDLOOP = 'ROUNDLOOP';
const FINALSCORE = 'FINALSCORE';

export default function Game (props) {
  const params = useParams();

  
  return (
    <div className="game">
      <LogoHeader text/>
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
      { props.gameState === ROUNDLOOP && 
        <RoundLoop 
          roundState={props.roundState}
          submitUserAnswer={props.submitUserAnswer}
          sendChoice={props.sendChoice}
          currentSubmissions={props.currentSubmissions}
          awaitState={props.awaitState}
          revealState={props.revealState}
          isVictim={props.isVictim}
          victimName={props.victimName}
          victimID= {props.victimID}
          question={props.question}
          victimAvatarId={props.victimAvatarId}
          roundScoreState={props.roundScoreState}
          currentRoundNum={props.currentRoundNum}
          totalRounds={props.totalRounds}
        />}
      {props.gameState === FINALSCORE && <FinalScore finalScore={props.finalScoreState}/>}
    </div>
  );
}