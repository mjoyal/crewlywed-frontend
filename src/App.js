import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import {useEffect, useState} from 'react';
import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {
  const [numRounds, setNumRounds] = useState("n/a")

  // BELOW: Example of getting data from the DB via JSON object from server, upon connection:
  useEffect(() => {
    socket.on('getSubmissions', submissionsObject => {
      console.log(submissionsObject);
    });
    }, []);


  //BELOW: CHAT ROOMS TEST:
    const joinRoom = function () {
      const roomCode = document.querySelector('#test').value;
      console.log('join room!')
      socket.emit('join room', roomCode); 
    };

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
    };

    socket.on('message', (messageData) => {
      console.log('message', messageData.message);
      console.log('from:', messageData.name);
    });


  //BELOW: DATA FLOW TESTS:

  //0. Test basic data flow:
  useEffect(() => {
    socket.emit('hi',{name: "Will"});
    }, []);

  //1. countRows:
  const getRowCount = function () {
    const table = document.querySelector('#getRowCount').value;
    socket.emit('rowCount', table)
  };

  socket.on('rowCountReturn', rowCount => {
    setNumRounds(rowCount);
  });

  //2. countRows:
  const getCurrentScore = function () {

  };


  return (
    <div className="App">
      
      {/* CHAT ROOMS TEST: */}
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
      
      {/* DATA FLOW TESTS: */}
      <header className="App-header">
        <h3> Data flow tests</h3>

        {/* 1. countRows */}
        <p>1. Get the number of rows from one of the tables in the DB:</p>
        <input id="getRowCount" type="text" placeholder="Insert table name" />
        <Button onClick={getRowCount}>Send</Button>
        <p>{numRounds}</p>
        <br></br>

        {/* 2. getScore */}
        <p>2. Get the current score for a player:</p>
        <input id="getCurrentScore" type="text" placeholder="Insert player ID" />
        <Button onClick={getCurrentScore}>Send</Button>
      </header>
    </div>
  );
}

export default App;
