import './App.css';

import {useEffect, useState} from 'react';
import { io } from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from './components/Button';
import TextArea from './components/TextArea';
import TextInput from './components/TextInput';
import JoinPage from './components/JoinPage';
import NameCard from './components/NameCard';
import Question from './components/Question';
import NewGamePage from './components/NewGamePage';

import Game from './components/Game/index.js';

const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {
  
  const [numRows, setNumRows] = useState("n/a");
  const [avatar, setAvatar] = useState("https://www.seekpng.com/png/small/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png");
  const [username, setUsername] = useState("______");
  const [score, setScore] = useState("___");

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

    useEffect(() => {
      socket.on('message', messageData => {
        console.log('message', messageData.message);
        console.log('from:', messageData.name);
      });  
    }, []);


  //BELOW: DATA FLOW TESTS:

  //0. Test connection:
  useEffect(() => {
    socket.on('connectMessage', message => {
      console.log(message);
    });
  }, []);

  //1. countRows:
  const getRowCount = function () {
    const table = document.querySelector('#getRowCount').value;
    socket.emit('rowCount', table)
  };

  socket.on('rowCountReturn', rowCount => {
    setNumRows(rowCount);
  });


  //2. getAvatar:
  const getAvatar = function () {
    const userID = document.querySelector('#getAvatar').value;
    socket.emit('avatar', userID)
  };

  socket.on('avatarReturn', avatar => {
    setAvatar(avatar);
  });


  //3. getScore:
  const getScore = function () {
    const userID = document.querySelector('#getScore').value;
    socket.emit('score', userID)
  };

  socket.on('scoreReturn', scoreData => {
    setUsername(scoreData.username);
    setScore(scoreData.total_score);
  });

  return (
    <Router>
      <Switch>

        
        <Route exact path="/">
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
              <Button onClick={getRowCount}>Get row count</Button>
              <p>{numRows}</p>
              <br></br>

              {/* 2. getAvatar */}
              <p>2. Get the avatar image for a player:</p>
              <input id="getAvatar" type="text" placeholder="Insert player ID" />
              <Button onClick={getAvatar}>Get avatar image</Button>
              <img className="testImage"
                src={avatar}
                alt="Avatar"
              />
              <br></br>
              
              {/* 3. getScore */}
              <p>3. Get the current score for a player:</p>
              <input id="getScore" type="text" placeholder="Insert player ID" />
              <Button onClick={getScore}>Get current score</Button>
              <p>{username}'s current score is {score}.</p>
              <br></br>
            </header>
            
          </div>
        </Route>
        <Route exact path="/new">
          <NewGamePage></NewGamePage>
        </Route>
        <Route exact path="/playground">
          <Button confirm onClick={() => console.log("hello")}>Click me!</Button>
          <TextArea label="your response" placeholder="enter your response here..." maxCount={50}/>
          <TextInput label="your name" placeholder="name" maxCount={8}/>
          

          <p> Host Name Card </p>
          <NameCard
            avatar='https://tcrn.ch/35VAVzn'
            playerName="will"
            host={true}
          />

          <p> Non-host Name Card (spacing is weird because of image sizes, will fix when have real images)</p>
          <NameCard
            avatar='https://tcrn.ch/35VAVzn'
            playerName="will"
            host={false}
          />

          <p>Question Prompt</p>
          <Question avatar="https://tcrn.ch/35VAVzn" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>

        </Route>

        <Route path="/:id">
          <Game players={[
            {playerName:"Mac", avatar:'https://tcrn.ch/35VAVzn', host:true },
            {playerName:"Will", avatar:'https://tcrn.ch/35VAVzn', host:false } ]} />
        </Route>
      </Switch>

    
      <Route path="/join">
        <JoinPage></JoinPage>
      </Route>

    </Router>
   
  );
}

export default App;
