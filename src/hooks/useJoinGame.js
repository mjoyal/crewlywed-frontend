import {useState, useEffect} from 'react'

// This hook tells the server to create a new player and add them to the game when a player submits their name and a game code on "/join".

const useJoinGame = (socket) => {

  // This is used for setting the error a user will see if the game code is invalid, if a game is full, or if their name is blank:
  const [joinErrorMessage, setJoinErrorMessage] = useState("");

  // Name and game code are passed to this hook from the JoinPage.js component:
  let playerName = "";
  let gameCode = "";

  // Send name and game code to server:
  const joinGame = function (name, code) {
    playerName = name.toLowerCase();
    gameCode = code.toLowerCase();
    const joinGameData = {
      playerName,
      gameCode
    };
    socket.emit('joinGame', joinGameData)
  };

  // Get a list of avatars not in use, so the new player can get one of them:
  const getAvatarsNotInUse = (joinGameData) => {
    socket.emit('getAvatarsNotInUse', joinGameData)
  };

  // Pick a random avatar from the list of avatars not in use:
  const generateUniqueAvatar = (avatarsNotInUse) => {
    let avatarsOptions = "";
    for (const avatar of avatarsNotInUse) {
      avatarsOptions += avatar.id;
    }
    const avatarID = avatarsOptions.charAt(Math.floor(Math.random() * avatarsOptions.length));
    return avatarID;
  };

  // Create a new player:
  const createNewPlayer = (joinGameData) => {
    const createNewPlayerData = {
      username: joinGameData.playerName,
      creator: false,
      session_id: joinGameData.gameID,
      avatar_id: generateUniqueAvatar(joinGameData.avatars)
    }
    socket.emit('createNewPlayer', createNewPlayerData);
  };

  useEffect(() => {
    // Listen for server to send confirmation that a game is valid to join:
    socket.on('joinGameReturn', joinGameData => {
      setJoinErrorMessage("");
      getAvatarsNotInUse(joinGameData);
    });
    // Listen for server to send a list of avatar options for the new player:
    socket.on('getAvatarsNotInUseReturn', joinGameData => {
      createNewPlayer(joinGameData);
    });

    //ERRORS:
    // Listen for server to send error - game is full:
    socket.on('joinGameErrorFull', message => {
      setJoinErrorMessage(message);
    });
    // Listen for server to send error - game code is invalid:
    socket.on('joinGameErrorInvalid', message => {
      setJoinErrorMessage(message);
    });
    // Listen for server to send error - blank name:
    socket.on('joinGameErrorBlankName', message => {
      setJoinErrorMessage(message);
    });
  }, [socket]);

  return { joinGame, joinErrorMessage };

};

export { useJoinGame };