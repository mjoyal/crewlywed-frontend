// import './App.css';

import {useEffect} from 'react';
import { io } from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useCreateNewGame } from "./hooks/useCreateNewGame.js";
import { useRoundLoop } from "./hooks/useRoundLoop.js";
import { useJoinGame } from "./hooks/useJoinGame.js";
import { useGameLoop } from "./hooks/useGameLoop.js";
import { useCreateLobby } from "./hooks/useCreateLobby.js";

import HomePage from './components/HomePage';
import JoinPage from './components/JoinPage';
import NewGamePage from './components/NewGamePage';
import Game from './components/Game/index.js';

const ENDPOINT = process.env.REACT_APP_SOCKET_URL || "http://localhost:8080";
// const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

function App() {

  //Test connection to socket:
  useEffect(() => {
    socket.on('connectMessage', message => {
      console.log(message);
    });
  }, []);

  const { createNewGame, createErrorMessage } = useCreateNewGame(socket);
  const { joinGame, joinErrorMessage } = useJoinGame(socket);
  const {lobbyInfo, players, userProfile} = useCreateLobby(socket); 
  const {roundState, submitUserAnswer, sendChoice, currentSubmissions, awaitState, revealState, currentVictimID, currentVictimName, currentVictimAvatarID, currentQuestionText, currentQuestionTextVictim, roundScoreState, currentRoundNum, totalRounds, highlightColor, setBackgroundColor, backgroundColor, setHighlightColor} = useRoundLoop(socket, userProfile); 
  const { startGame, gameState, finalScoreState} = useGameLoop(socket, userProfile, setBackgroundColor, backgroundColor, setHighlightColor); 
  
  return (

    <Router>

      <Switch>

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
            startGame={startGame}
            userProfile={userProfile}
            userID = {userProfile.id}

            gameState={gameState}
            roundState={roundState}
            totalRounds={totalRounds}
            currentRoundNum={currentRoundNum}
            isVictim={userProfile.id === currentVictimID}
            question={currentQuestionText}
            questionVictimText={currentQuestionTextVictim}
            victimName={currentVictimName}
            victimAvatarId={currentVictimAvatarID}
            victimColorClass={highlightColor}
            
            submitUserAnswer={submitUserAnswer}
            currentSubmissions={currentSubmissions}
            sendChoice={sendChoice}
            awaitState={awaitState}
            revealState={revealState}
            roundScoreState={roundScoreState}
            finalScoreState={finalScoreState}
          />
        </Route>

      </Switch>
  
    </Router>

  );
}

export default App;
