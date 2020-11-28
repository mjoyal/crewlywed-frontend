import {useState, useEffect} from 'react';
import { Socket } from 'socket.io-client';

const useRoundLoop = (socket, userProfile) => {

  // STATE
  // This determines which roundLoop component is rendered:
  const [roundState, setRoundState] = useState('ANSWER');

  // This is the unique roundID in the DB, e.g. 338:
  const [uniqueRoundID, setUniqueRoundID] = useState();
  
  // This is the round number shown in the game play, e.g. 1:
  const [currentRound, setCurrentRound] = useState();

  // This is the total number of rounds that will be played during the game play, e.g. 24 (8 players * 3 rounds per player):
  const [totalRounds, setTotalRounds] = useState();

  // FUNCTIONALITY
  const submitUserAnswer = function () {
    socket.emit('thisUserSubmitted', userProfile.id);
    setRoundState('AWAIT'); 
  };

  const sendChoice = function () {
    // send the choice on chooseAnswer button click
    socket.emit('userChoice');
    setRoundState('AWAIT'); 
  };

  useEffect(() => {
    socket.on('choosePage', () => {
      // the server says the timer is up, display the choose page
      setRoundState('CHOOSE');
    });

    socket.on('revealPage', () => {
      setRoundState('REVEAL');
    })

    socket.on('roundOver', () => {
      setRoundState('ANSWER'); 
    });
  }, [socket]);

  return {roundState, uniqueRoundID, currentRound, totalRounds, submitUserAnswer, sendChoice} ;
};

export { useRoundLoop };