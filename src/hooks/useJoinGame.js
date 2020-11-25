import {useState, useEffect} from 'react'

const useJoinGame = (socket) => {

  const [errorMessage, setErrorMessage] = useState("");

  let playerName = "";
  let gameCode = "";

  const joinGame = function (name, code) {
    playerName = name;
    gameCode = code;
    const joinGameData = {
      playerName,
      gameCode
    };
    socket.emit('joinGame', joinGameData)
  };

  const getAvatarsNotInUse = (gameID) => {
    socket.emit('getAvatarsNotInUse', gameID)
  };

  const generateUniqueAvatar = (avatarsNotInUse) => {
    let avatarsOptions = "";
    console.log("GEN FUNCTION:", avatarsNotInUse)
    for (const avatar of avatarsNotInUse) {
      avatarsOptions += avatar.id;
    }
    const avatarID = avatarsOptions.charAt(Math.floor(Math.random() * avatarsOptions.length));
    return avatarID;
  };

  const createNewPlayer = (avatarsResponseData) => {
    const createNewPlayerData = {
      username: playerName,
      creator: false,
      session_id: avatarsResponseData.gameID,
      avatar_id: generateUniqueAvatar(avatarsResponseData.avatars)
    }
    console.log("New Player Data:", createNewPlayerData)
    socket.emit('createNewPlayer', createNewPlayerData);
    // make sure player name isn't already used for same game
  };

  useEffect(() => {
    socket.on('joinGameReturn', gameID => {
      setErrorMessage("");
      getAvatarsNotInUse(gameID);
    });
    socket.on('joinGameErrorFull', message => {
      setErrorMessage(message);
    });
    socket.on('joinGameErrorInvalid', message => {
      setErrorMessage(message);
    });
    socket.on('getAvatarsNotInUseReturn', avatarsResponseData => {
      console.log("AVs not in use", avatarsResponseData);
      createNewPlayer(avatarsResponseData);
    })
  }, [socket]);

  return { joinGame, errorMessage };

};

export { useJoinGame };