import Button from './Button';

export default function Chat (props) {
  return (
    <header className="App-header">
      <h3> Chat rooms test</h3>
      <input id="test" type="text" placeholder="enter room code" />
      <br></br>
      <Button confirm onClick={props.joinRoom}>Join</Button>
      <br></br>
      <input id="name-test" type="text" placeholder="enter your name" />
      <input id="message-test" type="text" placeholder="enter message" />
      <Button confirm onClick={props.sendMessage}>Send</Button>
    </header>
  );
};