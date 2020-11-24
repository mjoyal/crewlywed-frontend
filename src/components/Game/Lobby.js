import React from 'react';

import Button from '../Button.js';
import NameCard from '../NameCard';

export default function Lobby(props) {

  return (
    <>
      <div>
        <h2>Room Code:</h2>
        <p>{props.roomCode}</p>
        <Button>Copy Code</Button>
        <Button>How to Play</Button>
      </div>
      <div>
        <h3>Players:</h3>
        <p>{props.players ? props.players.length : 0}/8</p>
        { props.players &&
          props.players.map(player => {
            <NameCard name={player.playerName} avatar={player.avatar} host={player.host}/>
          })
        }
      </div>
    </>
  )
}