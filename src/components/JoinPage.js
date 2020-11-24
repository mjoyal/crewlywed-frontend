import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';
export default function JoinPage (props) {

  const joinRoom = () => {
    console.log('joined room'); 
  }

  return (
    <>
    <img src="/" alt="logo"/>
    <h2>join a game</h2>
    <TextInput label="your name" placeholder="name" maxCount={8}/>
    <TextInput label="room code" placeholder="room code" maxCount={5}/>
    <p>choose a name your friends will recognize!</p>
    <Button confirm onClick={joinRoom}>Join</Button>
    </>
  ); 
}