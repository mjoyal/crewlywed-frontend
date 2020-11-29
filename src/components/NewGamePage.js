import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';
import LogoHeader from './LogoHeader';
import {useEffect, useState} from 'react';
import "../styles/NewGamePage.scss";
import {Link, Redirect} from "react-router-dom";

export default function NewGamePage (props) {

  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name:", name);
  }, [name])

  if(props.lobbyInfo) {
    return <Redirect to={`/${props.lobbyInfo}`} />
  }

  return (
    <main>
    <LogoHeader small/>
    <h2>host a game</h2>
    <TextInput
      label="your name"
      placeholder="name"
      maxCount={8}
      onChange={(name) => setName(name)}
    />
    <p className="instructions">as the host, you can start the game when all of your crew has joined.</p>
    <Button confirm onClick={event => props.createNewGame(name)}>create game</Button>
    <Link className="link" to="/">back home</Link>
    <p>{props.createErrorMessage}</p>
    </main>
  ); 
}