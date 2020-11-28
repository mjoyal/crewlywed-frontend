import {useState, useEffect} from 'react'


const useGameLoop = (socket, userProfile) => {
  const [gameState, setGameState] = useState('LOBBY'); 
  const [round, setRound] = useState(1);
  const [roundNum, setRoundNum] = useState(1);

  const startGame = function () {
    // tell the server that the host has started the game
    socket.emit('startGame', userProfile);
    console.log(round)
    console.log(roundNum)
  }

  useEffect(() => {

    socket.on('startGameReturn', () => {
      // set state for the roundloop! we playin now bishes
      setGameState('ROUNDLOOP'); 
    });

    socket.on('finalScore', () => {
      setGameState('FINALSCORE'); 
    });

  }, [socket]);

 
  return {startGame, gameState} ;

};

export { useGameLoop };