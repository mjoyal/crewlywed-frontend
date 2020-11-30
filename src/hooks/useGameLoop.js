import {useState, useEffect} from 'react'


const useGameLoop = (socket, userProfile) => {
  const [gameState, setGameState] = useState('LOBBY'); 
  const [finalScoreState, setScore] = useState([]);
  

  const startGame = function () {
    // tell the server that the host has started the game
    socket.emit('startGame', userProfile);
  }

  useEffect(() => {

    socket.on('startGameReturn', () => {
      // set state for the roundloop! we playin now bishes
      setGameState('ROUNDLOOP'); 
    });

    socket.on('finalScore', (finalData) => {
      setScore(finalData);
      setGameState('FINALSCORE'); 
      // leaving this as default color for now
      document.body.className = ``; 
  
    });

  }, [socket]);

 
  return {startGame, gameState, finalScoreState} ;

};

export { useGameLoop };