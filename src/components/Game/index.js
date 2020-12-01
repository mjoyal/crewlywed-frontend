import React from 'react';
import { useParams } from 'react-router-dom';

import "../../styles/partials/_global.scss";


import Lobby from './Lobby';
import RoundLoop from './RoundLoop/roundIndex.js'
import FinalScore from './FinalScore';
import LogoHeader from '../LogoHeader';

const LOBBY = 'LOBBY';
const ROUNDLOOP = 'ROUNDLOOP';
const FINALSCORE = 'FINALSCORE';

const lobbyData = [
  {
    avatar_id:1,
    creator:true,
    username:"Loongest"
  },
  {
    avatar_id:2,
    host:false,
    username:"Mac"
  },
  {
    avatar_id:3,
    host:false,
    username:"Mac"
  },
  {
    avatar_id:4,
    host:false,
    username:"Mac"
  },
  {
    avatar_id:5,
    host:false,
    username:"Mac"
  },
  {
    avatar_id:6,
    host:false,
    username:"Mac"
  },
  {
    avatar_id:7,
    host:false,
    username:"Mac"
  },
  {
    avatar_id:8,
    host:false,
    username:"Mac"
  },
]
const scoreTest = [
  {id: 1, avatar_id: 1, username:'mac', total:100, winner:true},
  {id: 2, avatar_id: 2, username:'mac', total:100, winner:false},
  {id: 3, avatar_id: 3, username:'mac', total:100, winner:false},
  {id: 4, avatar_id: 4, username:'mac', total:100, winner:false},
  {id: 5, avatar_id: 5, username:'mac', total:100, winner:false},
  {id: 6, avatar_id: 2, username:'mac', total:100, winner:false},
  {id: 7, avatar_id: 3, username:'mac', total:100, winner:false},
  {id: 8, avatar_id: 4, username:'mac', total:100, winner:false}
]
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
          userID= {props.userID}
          question={props.question}
          questionVictimText={props.questionVictimText}
          victimAvatarId={props.victimAvatarId}
          victimColorClass={props.victimColorClass}
          roundScoreState={props.roundScoreState}
          currentRoundNum={props.currentRoundNum}
          totalRounds={props.totalRounds}
        />}
      {props.gameState === FINALSCORE && <FinalScore finalScore={props.finalScoreState}/>}
    </div>
  );
}