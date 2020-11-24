import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';

export default function NewGamePage (props) {

  return (
    <main>
    <img src="images/logo.png" alt="logo"/>
    <h2>host a game</h2>
    <TextInput id="getHostName" label="your name" placeholder="name" maxCount={8}/>
    <p>as the host, you can start the game when all of your friends have joined.</p>
    <Button confirm onClick={props.createNewGame}>create game</Button>
    </main>
  ); 
}