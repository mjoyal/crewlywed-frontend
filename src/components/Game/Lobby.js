import React from 'react';

import Button from '../Button.js';
import NameCard from '../NameCard';

import '../../styles/Lobby.scss'

export default function Lobby(props) {

  return (
    <article className="lobby">
      <header>
        <h2>Room Code:</h2>
        <p className="room-code">{props.roomCode}</p>
        <Button onClick={() => console.log("code copied!")}>Copy Code</Button>
        <Button onClick={() => console.log("how to play opened")}>How to Play</Button>
      </header>
      <hr/>
      <div className="player-list">
        <div className="player-counter">
          <h3>Players:</h3>
          <p>{props.players ? props.players.length : 0}/8</p>
        </div>
        { props.players &&
          props.players.map((player, index) => {
            return <NameCard
              key={index}
              username={player.username}
              avatarID={player.avatar_id}
              host={player.creator}
              active={true}
            />
          })
        }
        {
          props.host &&
          //NOTE: Commenting out the below line and replacing it w/ the one below that to make testing easier. ***NOTE TO SELF: After development, uncomment the below line and delete the one below that.
          // <Button onClick={props.startGame} disabled={props.players.length < 3}>Start Game</Button>
          <Button onClick={props.startGame}>Start Game</Button>
        }
      </div>
    </article>
  )
}