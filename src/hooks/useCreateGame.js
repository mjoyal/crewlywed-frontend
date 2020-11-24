import {useState, useEffect} from 'react';

const useCreateGame = (socket) => {

  const [gameID, setGameID] = useState();

  const generateRoomCode = function() {
    let code = '';
    const options = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 5; i++) { //hardcoded at 5 for now
      code += options.charAt(Math.floor(Math.random() * options.length));
    }
    return code;
  };
  
  const createNewGame = function () {
    const gameCode = generateRoomCode();
    const numRounds = 3; //hardcoded at 3 for now
    const createNewGameData = {
      gameCode,
      numRounds
    }
    socket.emit('createNewGame', createNewGameData)
  };

  useEffect(() => {
    socket.on('createNewGameReturn', id => {
      setGameID(id);
      console.log(id);
      console.log(gameID);
    });
  }, [socket]);

  const createHost = function() {
    let username;
    const createHostData = {     
      username,
      creator: true,
      session_id: gameID
    }
  };

  return { createNewGame, createHost };
};

export { useCreateGame };