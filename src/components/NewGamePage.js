import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';
import {useState} from 'react';

export default function NewGamePage (props) {

  const [name, setName] = useState("");

  return (
    <main>
    <img src="images/logo.png" alt="logo"/>
    <h2>host a game</h2>
    <TextInput
      label="your name"
      placeholder="name"
      maxCount={8}
      onChange={(name) => setName(name)}
    />
    <p>as the host, you can start the game when all of your friends have joined.</p>
    <Button confirm onClick={event => props.createNewGame(name)}>create game</Button>
    </main>
  ); 
}