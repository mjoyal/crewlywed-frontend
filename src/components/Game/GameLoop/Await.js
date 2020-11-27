import React from 'react';

import NameCard from '../../NameCard';

export default function AwaitResponsePage (props) {

  return (
    <div>
      {props.players.map(player => <NameCard 
        avatarID={player.avatarID}
        username={player.username}
        active={true} //update later
        host={player.creator}
      />)}

    </div>
  )
}