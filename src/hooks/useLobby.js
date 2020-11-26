import {useState, useEffect} from 'react'

const useLobby = (socket) => {
  const [lobbyInfo, setLobbyInfo] = useState(); 
  useEffect(() => {
    socket.on('hostLobbyReturn', lobbyInfo => {
     socket.emit('gameCode', lobbyInfo); 
      console.log('after socket on', lobbyInfo)
    });
    socket.on('gameCodeReturn', gameCode => {
      console.log(gameCode);
    });
    
  }, [socket]);

  return { lobbyInfo };

};

export { useLobby };