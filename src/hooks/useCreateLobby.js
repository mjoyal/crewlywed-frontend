import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

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

  socket.on('createNewHostReturn', createNewHostData => {
    console.log(createNewHostData);
  });
  socket.on('createNewPlayerReturn', data => {
  });

  return { lobbyInfo };

};

export { useCreateLobby };