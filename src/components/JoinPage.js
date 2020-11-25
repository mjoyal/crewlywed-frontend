import classNames from 'classnames';
import TextInput from './TextInput';
import Button from './Button';
import "../styles/JoinPage.scss";
import {Link} from "react-router-dom";

export default function JoinPage (props) {

  const joinRoom = () => {
    console.log('joined room'); 
  }

  return (
    <main>
    <img src="images/logo.png" alt="logo"/>
    <h2>join a game</h2>
    <TextInput label="your name" placeholder="name" maxCount={8}/>
    <TextInput label="room code" placeholder="room code" maxCount={5}/>
    <p>choose a name your friends will recognize!</p>
    <Button confirm onClick={joinRoom}>join game</Button>
    <Link className="link" to="/">back home</Link>
    </main>
  ); 
}