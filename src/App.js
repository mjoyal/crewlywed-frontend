import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import {useEffect, useState} from 'react';
import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {
  
  // // BELOW: This can be used in conjunction w/ useEffect to make sure the app doesn't render until data is received:
  // const [loading, setLoading] = useState(true);
  // // THEN: Put the following right about the return of this function:
  // if (loading) {
  //   return null;
  // };
  // // AND: Put the below inside the useEffect:
  // setLoading(false);  
 

  // BELOW: Example of getting data from the DB via JSON object from server, upon connection:
  useEffect(() => {
    socket.on('getSubmissions', submissionsObject => {
      console.log(submissionsObject);
    });
    }, []);


  //BELOW: Chatrooms example:
    const joinRoom = function () {
      const roomCode = document.querySelector('#test').value;
      console.log('join room!')
      socket.emit('join room', roomCode); 
    }
    const sendMessage = function () {
      const message = document.querySelector('#message-test').value;
      const name = document.querySelector('#name-test').value;
      const room = document.querySelector('#test').value;
      const messageData = {
        message, 
        name, 
        room
      }
      socket.emit('message', messageData);
    }
    socket.on('message', (messageData) => {
      console.log('message', messageData.message);
      console.log('from:', messageData.name);
    });

  return (
    <div className="App">
      <header className="App-header">
        <h3> Chat rooms test</h3>
        <input id="test" type="text" placeholder="enter room code" />
        <br></br>
        <Button confirm onClick={joinRoom}>Join</Button>
        <br></br>
        <input id="name-test" type="text" placeholder="enter your name" />
        <input id="message-test" type="text" placeholder="enter message" />
        <Button confirm onClick={sendMessage}>Send</Button>
      </header>
      <br></br>
      <br></br>
      <p> -------------------------------------------------- </p>
      <header className="App-header">
        <h3> Data flow tests</h3>
      </header>
    </div>
  );
}

export default App;
