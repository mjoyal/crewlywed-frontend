import {useEffect} from 'react';

const useCreateNewGame = (socket) => {

  let hostName = "";

  const generateGameCode = function() {
    let code = '';
    const options = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 5; i++) { //hardcoded at 5 for now
      code += options.charAt(Math.floor(Math.random() * options.length));
    }
    return code;
  };

  const generateAvatarID = function() {
    const options = '12345678';
    const ID = options.charAt(Math.floor(Math.random() * options.length));
    return ID;
  };

  const createNewHost = function(gameID) {
    const username = hostName;
    const createNewHostData = {     
      username,
      creator: true,
      session_id: gameID,
      avatar_id: generateAvatarID()
    }
    socket.emit('createNewHost', createNewHostData);
  };
  
  const createNewGame = function (name) {
    hostName = name.toLowerCase();
    const gameCode = generateGameCode();
    const numRounds = 3; //hardcoded at 3 for now
    const createNewGameData = {
      gameCode,
      numRounds
    }
    socket.emit('createNewGame', createNewGameData);
  };

  useEffect(() => {
    socket.on('createNewGameReturn', gameID => {
      createNewHost(gameID);
      // ask server for lobby info here 

      socket.emit('createHostLobby', gameID);
    });
  }, [socket]);

  return { createNewGame };
};

export { useCreateNewGame };