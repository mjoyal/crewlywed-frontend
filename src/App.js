import './App.css';

import {Component, useEffect, useState} from 'react';
import { io } from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useDataFlow } from "./hooks/useDataFlow.js";
import { useChat } from "./hooks/useChat.js";
import { useCreateNewGame } from "./hooks/useCreateNewGame.js";
import { useRoundLoop } from "./hooks/useRoundLoop.js";
import { useJoinGame } from "./hooks/useJoinGame.js";

import { useGameLoop } from "./hooks/useGameLoop.js";

import { useCreateLobby } from "./hooks/useCreateLobby.js";


import HomePage from './components/HomePage';
import JoinPage from './components/JoinPage';
import NewGamePage from './components/NewGamePage';
import Game from './components/Game/index.js';
import Playground from './components/PlaygroundTest';
import DataFlow from './components/DataFlowTest';
import Chat from './components/ChatTest';

const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {

  //Test connection to socket:
  useEffect(() => {
    socket.on('connectMessage', message => {
      console.log(message);
    });
  }, []);

  const { avatar, getAvatar, username, score, getScore } = useDataFlow(socket);
  const { joinRoom, sendMessage } = useChat(socket);
  const { createNewGame, createErrorMessage } = useCreateNewGame(socket);
  const { joinGame, joinErrorMessage } = useJoinGame(socket);
  const {lobbyInfo, players, userProfile} = useCreateLobby(socket); 
  const {roundState, submitUserAnswer, sendChoice, currentSubmissions, awaitState, revealState, currentVictimID, currentVictimName, currentVictimAvatarID, currentQuestionText, roundScoreState, currentRoundNum, totalRounds, highlightColor} = useRoundLoop(socket, userProfile); 
  const { startGame, gameState, finalScoreState} = useGameLoop(socket, userProfile); 
  
  // trial for background-color with state
  
  // const [backgroundColor, setBackgroundColor] = useState('body'); 
  // const [highlightColor, setHighlightColor] = useState(''); 

  /*
  userProfile :{
    name: null
    id: null
    avatarID: null
    creator: false
  }
  */

 // change background color when avatarID updates, will put that in the dependency array

//  useEffect(() => {
//   setBackgroundColor(`color-${currentVictimAvatarID}`);
//   setHighlightColor(`span-${currentVictimAvatarID}`)
//   document.body.classList.add(backgroundColor); 
// }, [currentVictimAvatarID, backgroundColor])



  return (

    <Router>

      <Switch>

     {/* routes for testing */}
        <Route exact path ="/chat">
          <Chat
            joinRoom={joinRoom}
            sendMessage={sendMessage}
          />
        </Route>

        <Route exact path = "/dataflow">
            <DataFlow
              getAvatar={getAvatar}
              avatar={avatar}
              getScore={getScore}
              score={score}
              username={username}
            />
        </Route>

        <Route exact path="/playground">
            <Playground></Playground>
        </Route>

    {/* real routes  */}
        <Route exact path="/">
            <HomePage></HomePage>
        </Route>
    
        <Route exact path="/new">
          <NewGamePage
            createNewGame={createNewGame}
            lobbyInfo={lobbyInfo}
            createErrorMessage={createErrorMessage}
          />
        </Route>

        <Route exact path="/join">
          <JoinPage
            joinGame={joinGame}
            joinErrorMessage={joinErrorMessage}
            lobbyInfo={lobbyInfo}
          />
        </Route>

        <Route path="/:id">
          <Game 
            lobbyInfo={lobbyInfo}
            players={players}
            userProfile={userProfile}
            startGame={startGame}
            gameState={gameState}
            roundState={roundState}
            submitUserAnswer={submitUserAnswer}
            sendChoice={sendChoice}
            awaitState={awaitState}
            currentSubmissions={currentSubmissions}
            revealState={revealState}
            isVictim={userProfile.id === currentVictimID}
            victimID = {currentVictimID}
            victimName={currentVictimName}
            question={currentQuestionText}
            victimAvatarId={currentVictimAvatarID}
            victimColorClass={highlightColor}
            roundScoreState={roundScoreState}
            finalScoreState={finalScoreState}
            currentRoundNum={currentRoundNum}
            totalRounds={totalRounds}
          />
        </Route>

      </Switch>
  
    </Router>

  );
}

export default App;
