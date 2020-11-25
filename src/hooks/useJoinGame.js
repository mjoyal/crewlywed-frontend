import {useState, useEffect} from 'react'

const useJoinGame = (socket) => {

  const [errorMessage, setErrorMessage] = useState("");

  let playerName = "";
  let gameCode = "";

  const getAvatarsNotInUse = (gameID) => {
    socket.emit('getAvatarsNotInUse', gameID)
  };

  const generateUniqueAvatar = (avatarsNotInUse) => {
    let avatarsOptions = "";
    for (const avatar of avatarsNotInUse) {
      avatarsOptions += avatar.id;
    }
    const avatarID = avatarsOptions.charAt(Math.floor(Math.random() * avatarsOptions.length));
    return avatarID;
  };

  const createNewPlayer = (gameID) => {
    getAvatarsNotInUse(gameID);
    // const createNewPlayerData = {
    //   username: playerName,
    //   creator: false,
    //   session_id: gameID,
    //   avatar_id = generateUniqueAvatar(avatarsInUse)
    // }
    // socket.emit('createNewPlayer', createNewPlayerData);
    // make sure player name isn't already used for same game
  };

  const joinGame = function (name, code) {
    playerName = name;
    gameCode = code;
    const joinGameData = {
      playerName,
      gameCode
    };
    socket.emit('joinGame', joinGameData)
  };

  useEffect(() => {
    socket.on('joinGameReturn', gameID => {
      setErrorMessage("");
      createNewPlayer(gameID);
    });
    socket.on('joinGameErrorFull', message => {
      setErrorMessage(message);
    });
    socket.on('joinGameErrorInvalid', message => {
      setErrorMessage(message);
    });
    socket.on('getAvatarsNotInUseReturn', avatars => {
      generateUniqueAvatar(avatars);
    })
  }, [socket]);

  return { joinGame, errorMessage };

};

export { useJoinGame };