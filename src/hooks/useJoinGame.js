import {useState, useEffect} from 'react'

const useJoinGame = (socket) => {

  const [errorMessage, setErrorMessage] = useState("");

  let playerName = "";
  let gameCode = "";

  const generateUniqueAvatar = () => {
    //select random from pool of currently unused avatars
  };

  const createNewPlayer = () => {

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
    socket.on('joinGameReturn', id => {
      setErrorMessage("");
      console.log(id);
      createNewPlayer(id);
    });
    socket.on('joinGameErrorFull', message => {
      setErrorMessage(message);
    });
    socket.on('joinGameErrorInvalid', message => {
      console.log(message);
      setErrorMessage(message);
    });  
  }, [socket]);

  return { joinGame, errorMessage };

};

export { useJoinGame };