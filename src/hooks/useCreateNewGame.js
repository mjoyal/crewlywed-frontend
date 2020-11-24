// import {useState, useEffect} from 'react';

const useCreateNewGame = (socket) => {

  const generateRoomCode = function() {
    let code = '';
    const options = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 5; i++) { //hardcoded at 5 for now
      code += options.charAt(Math.floor(Math.random() * options.length));
    }
    return code;
  };

  const createNewHost = function(gameID) {
    let username;
    const createNewHostData = {     
      username,
      creator: true,
      session_id: gameID
    }
    socket.emit('createNewHost', createNewHostData);
  };
  
  const createNewGame = function () {
    const gameCode = generateRoomCode();
    const numRounds = 3; //hardcoded at 3 for now
    const createNewGameData = {
      gameCode,
      numRounds
    }
    socket.emit('createNewGame', createNewGameData);
    socket.on('createNewGameReturn', id => {
      createNewHost(id);
    });
  };

  return { createNewGame };
};

export { useCreateNewGame };