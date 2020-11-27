import {useState, useEffect} from 'react';
import { Socket } from 'socket.io-client';

const useRoundLoop = (socket, userProfile) => {
  const [roundState, setRoundState] = useState('ANSWER'); 
  
  const submitUserAnswer = function (answer) {
    userProfile.answer = answer; 
    console.log(userProfile); 
    socket.emit('thisUserSubmitted', userProfile);
    setRoundState('AWAIT'); 
  }


  const sendChoice = function () {
    // send the choice on chooseAnswer button click
    socket.emit('userChoice');
    setRoundState('AWAIT'); 
  }

  useEffect(() => {
    socket.on('choosePage', () => {
      // the server says the timer is up, display the choose page
      setRoundState('CHOOSE');
    });

    socket.on('revealPage', () => {
      setRoundState('REVEAL');
    })

    socket.on('roundScore', () => {
      setRoundState('ROUNDSCORE'); 
    });

    socket.on('roundOver', () => {
      setRoundState('ANSWER'); 
    });
  }, [socket]);

  return {roundState, submitUserAnswer, sendChoice} ;
};

export { useRoundLoop };