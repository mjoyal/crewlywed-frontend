import TextInput from './TextInput';
import Button from './Button';
import LogoHeader from './LogoHeader';
import {useEffect, useState} from 'react';
import "../styles/NewGamePage.scss";
import {Link, Redirect} from "react-router-dom";
import ButtonContainer from './ButtonContainer';

export default function NewGamePage (props) {

  const [name, setName] = useState("");

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
      maxCount={10}
      onChange={(name) => setName(name)}
      error = {props.createErrorMessage}
    />
    <p className="instructions" style={{fontSize: "1.5rem"}}>since you're the host, you'LL get to start the game once your crew joins!</p>
    {/* <p>{props.createErrorMessage}</p> */}
    <ButtonContainer>
      <Link className="link" to="/">back home</Link>
      <Button confirm onClick={event => props.createNewGame(name)}>create game!</Button>
    </ButtonContainer>

    </main>
  ); 
}