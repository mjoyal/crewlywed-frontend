import './App.css';

import {useEffect, useState} from 'react';
import { io } from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useDataFlow } from "./hooks/useDataFlow.js";

import Button from './components/Button';
import TextArea from './components/TextArea';
import TextInput from './components/TextInput';
import JoinPage from './components/JoinPage';
import NameCard from './components/NameCard';
import Question from './components/Question';
import NewGamePage from './components/NewGamePage';
import Timer from './components/Timer';
import Game from './components/Game/index.js';

const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {

  const { avatar, setAvatar, getAvatar, username, setUsername, score, setScore, getScore } = useDataFlow(socket);

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

  //Test connection:
  useEffect(() => {
    socket.on('connectMessage', message => {
      console.log(message);
    });
  }, []);

  return (
    <Router>
      <Switch>
        
        <Route exact path="/">
          <h1>Welcome to Crewlywed!</h1>
        </Route>

        <Route exact path ="/chat">
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
        </Route>

        <Route exact path = "/dataflow">
          <div className="App">                        
            <header className="App-header">
              <h3> Data flow</h3>

              <p>Get the avatar image for a player:</p>
              <input id="getAvatar" type="text" placeholder="Insert player ID" />
              <Button onClick={getAvatar}>Get avatar image</Button>
              <img className="testImage"
                src={avatar}
                alt="Avatar"
              />

              
              <p>Get the current score for a player:</p>
              <input id="getScore" type="text" placeholder="Insert player ID" />
              <Button onClick={getScore}>Get current score</Button>
              <p>{username}'s current score is {score}.</p>
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

        <p>Timer</p>
        <Timer time={60} width={30}></Timer>

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
