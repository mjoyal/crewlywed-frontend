import {useState, useEffect} from 'react';
import { Socket } from 'socket.io-client';

const useRoundLoop = (socket, userProfile) => {
  const [roundState, setRoundState] = useState('ANSWER'); 
  const [awaitState, setAwait] = useState([]);
  const [currentSubmissions, setCurrentSubmissions] = useState([]); 

  const submitUserAnswer = function (answer) {
    const round = 1; 
    const userAnswerInfo = {
      answer, 
      round, 
      userProfile
    };
    socket.emit('thisUserSubmitted', (userAnswerInfo));
    setRoundState('AWAIT'); 
  }


  const sendChoice = function (choice) {
    const round = 1; 
    const userChoiceInfo = {
      choice, 
      round, 
      userProfile
    }; 
    socket.emit('userChoice', userChoiceInfo);
    setRoundState('AWAIT'); 
  }

  useEffect(() => {
    socket.on('choosePage', (choices) => {
      setCurrentSubmissions(choices); 
      console.log(choices) 
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

    socket.on('awaitData', (awaitData) => {
      setAwait(awaitData);
      console.log(awaitData);
    })
  }, [socket]);

  return {roundState, submitUserAnswer, sendChoice, currentSubmissions, awaitState} ;
};

export { useRoundLoop };