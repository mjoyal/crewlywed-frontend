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
        <Button>Copy Code</Button>
        <Button>How to Play</Button>
      </header>
      <hr/>
      <div>
        <h3>Players:</h3>
        <p>{props.players ? props.players.length : 0}/8</p>
        { props.players &&
          props.players.map(player => {
            <NameCard name={player.playerName} avatar={player.avatar} host={player.host}/>
          })
        }
      </div>
    </article>
  )
}