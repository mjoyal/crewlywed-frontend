// import {useState, useEffect} from 'react';

const useGameLoop = (socket) => {

  const generateRoomCode = function() {
    let code = '';
    const options = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 5; i++) { //hardcoded at 5 for now
      code += options.charAt(Math.floor(Math.random() * options.length));
    }
    return code;
  };
  
  const createGame = function () {
    const gameCode = generateRoomCode();
    const numRounds = 3; //hardcoded at 3 for now
    const createGameData = {
      gameCode,
      numRounds
    }
    socket.emit('createGame', createGameData)
  };

  const createHost = function() {
    let username;
    const createHostData = {     
      username,
      creator: true 
    }
  };

  return { createGame, createHost };
};

export { useGameLoop };