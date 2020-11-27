import {useState, useEffect} from 'react';

const useRoundLoop = (socket, userProfile) => {
  const [roundState, setRoundState] = useState('ANSWER'); 
  
  const submitUserAnswer = function () {
    socket.emit('thisUserSubmitted', userProfile.id);
    setRoundState('AWAIT'); 
  }

  useEffect(() => {
    
  }, [roundState]);

  return {roundState, submitUserAnswer} ;
};

export { useRoundLoop };