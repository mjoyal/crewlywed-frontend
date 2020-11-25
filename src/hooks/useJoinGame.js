const useJoinGame = (socket) => {

  let playerName = "";

  const generateUniqueAvatar = () => {
    //select random from pool of currently unused avatars
  };

  const checkGameCode = () => {
    //make sure it exists
    //make sure it's not full
    //make sure it hasn't ended already
  };

  const joinGame = function (name, code) {
    console.log('name:', name);
    console.log('code:', code);
  };

  return { joinGame };

};

export { useJoinGame };