// import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';
import "../styles/JoinPage.scss";
import {Link} from "react-router-dom";
import {useState} from 'react';


export default function JoinPage (props) {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  return (
    <main>
    <img src="images/logo.png" alt="logo"/>
    <h2>join a game</h2>
    <TextInput
      label="your name"
      placeholder="name"
      maxCount={8}
      onChange={(name) => setName(name)}
    />
    <TextInput
      label="room code"
      placeholder="room code"
      maxCount={5}
      onChange={(code) => setCode(code)}
    />
    <p>choose a name your crew will recognize!</p>
    <Button confirm onClick={event => props.joinGame(name, code)}>join game</Button>
    <p>{props.errorMessage}</p>
    </main>
  ); 
}