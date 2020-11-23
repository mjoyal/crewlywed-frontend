import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';

export default function NewGamePage (props) {

  const createRoom = () => {
    console.log('created room'); 
  }

  return (
    <>
    <img src="/" alt="logo"/>
    <h2>host a game</h2>
    <TextInput label="your name" placeholder="name" maxCount={8}/>
    <p>as the host, you can start the game when all of your friends have joined.</p>
    <Button confirm onClick={createRoom}>create game</Button>
    </>
  ); 
}