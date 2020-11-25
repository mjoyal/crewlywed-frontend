import {useState} from 'react'

const useJoinGame = (socket) => {

  const [errorMessage, setErrorMessage] = useState("");

  let playerName = "";
  let gameCode = "";

  const generateUniqueAvatar = () => {
    //select random from pool of currently unused avatars
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

  // socket.on('joinGameReturn')

  socket.on('joinGameErrorFull', message => {
    setErrorMessage(message);
  });
  socket.on('joinGameErrorInvalid', message => {
    setErrorMessage(message);
  });

  return { joinGame, errorMessage };

};

export { useJoinGame };