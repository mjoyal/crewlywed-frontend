import {useState, useEffect} from 'react';
import { Socket } from 'socket.io-client';

const useRoundLoop = (socket, userProfile) => {
  const [roundState, setRoundState] = useState('ANSWER'); 
  
  const submitUserAnswer = function () {
    socket.emit('thisUserSubmitted', userProfile.id);
    setRoundState('AWAIT'); 
  }
  const sendChoice = function () {
    // send the choice on chooseAnswer button click
  }

  useEffect(() => {
    socket.on('choosePage', () => {
      // the server says the timer is up, display the choose page
      setRoundState('CHOOSE');
    });

    socket.on('revealPage', () => {
      setRoundState('REVEAL');
    })
  }, [socket]);

  return {roundState, submitUserAnswer} ;
};

export { useRoundLoop };