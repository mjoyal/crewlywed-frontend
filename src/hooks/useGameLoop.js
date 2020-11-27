import {useState, useEffect} from 'react'


const useGameLoop = (socket, userProfile) => {
const [gameState, setGameState] = useState('LOBBY'); 

const startGame = function () {
  // tell the server that the host has started the game
  socket.emit('startGame', userProfile.code);

}
  useEffect(() => {

    socket.on('startGame', () => {
      // set state for the gameloop! we playin now bishes
      setGameState('GAMELOOP'); 
    });

    socket.on('finalScore', () => {
      setGameState('FINALSCORE'); 
    });

  }, [socket]);

 
  return {startGame, gameState} ;

};

export { useGameLoop };