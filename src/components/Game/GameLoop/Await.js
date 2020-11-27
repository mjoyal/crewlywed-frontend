import React from 'react';

import NameCard from '../../NameCard';

export default function AwaitResponsePage (props) {

  return (
    <div>
      <h2>waiting for responses...</h2>
      {props.players.map(player => <NameCard 
        avatarID={player.avatarID}
        username={player.username}
        active={true} //update later
        host={player.creator}
      />)}

    </div>
  )
}