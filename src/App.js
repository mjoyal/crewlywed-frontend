import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import {useEffect, useState} from 'react';
import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {
  // const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setLoading(false);  
    socket.on('avatar', function(playerInfo) {
      console.log(playerInfo);
    });
    }, []);

    // const createRoom = function() {
    //   console.log('create room!')
    //   socket.emit('create room'); 
    // }; 

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

    // listeners 
    socket.on('show room', (room) => {
      console.log('here is the room name', room);
    })

    socket.on('message', (messageData) => {
      console.log('message', messageData.message);
      console.log('from:', messageData.name);
    });

  if (loading) {
    return null;
  };

  return (
    <div className="App">
      <header className="App-header">
      <input id="test" type="text" placeholder="enter room code"/>
      <br></br>
      <Button confirm onClick={joinRoom}>Join</Button>
      {/* <Button confirm onClick={createRoom}>Create</Button> */}
      <br></br>

      <input id="name-test" type="text" placeholder="enter your name"/>
      <input id="message-test" type="text" placeholder="enter message"/>
      <Button confirm onClick={sendMessage}>Send</Button>
      </header> 
    </div>
  );
}

export default App;
