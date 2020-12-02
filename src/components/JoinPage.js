import TextInput from './TextInput';
import Button from './Button';
import LogoHeader from './LogoHeader';
import "../styles/JoinPage.scss";
import {Link, Redirect} from "react-router-dom";
import {useState} from 'react';
import ButtonContainer from './ButtonContainer';


export default function JoinPage (props) {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  if(props.lobbyInfo) {
    return <Redirect to={`/${props.lobbyInfo}`} />
  }

  return (
    <main>
      <LogoHeader small/>
      <h2>join a game</h2>
      <TextInput
        label="your name"
        placeholder="name"
        maxCount={10}
        onChange={(name) => setName(name)}
        error={props.joinErrorMessage === "please enter a name!" ? props.joinErrorMessage : undefined}
      />
      <TextInput
        label="room code"
        placeholder="room code"
        maxCount={5}
        onChange={(code) => setCode(code)}
        error={props.joinErrorMessage !== "please enter a name!" ? props.joinErrorMessage : undefined}
      />
      <p className="joinInstructions" style={{fontSize: "1.5rem"}}>choose a name your crew will recognize!</p>
      {/* <p>{props.joinErrorMessage}</p> */}
      <ButtonContainer>
        <Link className="link" to="/">back home</Link>
        <Button confirm onClick={event => props.joinGame(name, code)}>join game!</Button>
      </ButtonContainer>
    </main>
  ); 
}