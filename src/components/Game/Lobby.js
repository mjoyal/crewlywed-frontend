import {useRef, useState} from 'react';

import Button from '../Button.js';
import NameCard from '../NameCard';

import '../../styles/Lobby.scss'

export default function Lobby(props) {
  const gameCodeText = useRef(null);
  const [copyButtonText, setCopyButtonText] = useState("copy code!"); 

  const copyCode = function (e) {
    gameCodeText.current.select();
    document.execCommand('copy'); 
    setCopyButtonText("code copied!"); 

    setTimeout(() => {
      setCopyButtonText("copy code!"); 
    }, 2000);
  };

  return (
    <article className="lobby">
      <header>  
        <h2>room code:</h2>
        <input ref={gameCodeText} spellCheck="false" readOnly className="room-code" type="text" value={props.roomCode}/>
        <Button onClick={copyCode}>{copyButtonText}</Button>
        <Button onClick={() => console.log("how to play opened")}>how to play</Button>
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
          // <Button onClick={props.startGame} disabled={props.players.length < 3}>Start Game</Button>
          <Button onClick={props.startGame} disabled={false}>Start Game</Button>
        }

      </div>
    </article>
  )
}