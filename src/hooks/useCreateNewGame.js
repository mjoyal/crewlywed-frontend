import {useEffect} from 'react';

// This hook tells the server to create a new game and then to create a new host when a user submits their name on "/new".

const useCreateNewGame = (socket) => {

  // The hostName is passed to this hook from the NewGamePage.js component:
  let hostName = "";

  // This generates a random code for the new game:
  const generateGameCode = function() {
    let code = '';
    const options = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 5; i++) { //hardcoded at 5 for now
      code += options.charAt(Math.floor(Math.random() * options.length));
    }
    return code;
  };

  // This tells the server to create a new row for the new game in the sessions table of the DB:
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

  // This generates a random avatar for the host:
  const generateAvatarID = function() {
    const options = '12345678';
    const ID = options.charAt(Math.floor(Math.random() * options.length));
    return ID;
  };

  // This tells the server to create a new row for the host in the players table of the DB:
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

  useEffect(() => {
  //Listen for server to send confirmation that a new game was created:
  socket.on('createNewGameReturn', gameID => {
      createNewHost(gameID);
    });
  //Listen for server to send confirmation that a new player (host) was created:
  // socket.on('',
  //  socket.emit('createHostLobby', gameID);
  // )
  });

  return { createNewGame };
};

export { useCreateNewGame };