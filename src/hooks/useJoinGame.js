const useJoinGame = (socket) => {

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

  return { joinGame };

};

export { useJoinGame };