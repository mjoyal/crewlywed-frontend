import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

  const [lobbyInfo, setLobbyInfo] = useState("Array should go here");

  useEffect(() => {
    socket.on('createNewHostReturn', createNewHostData => {
      console.log('data sent back from server:', createNewHostData.id);
      setLobbyInfo(createNewHostData.id);
      console.log('lobbyInfo:', lobbyInfo);
    });
    // socket.on('createNewPlayerReturn', createNewPlayerData => {
    // });
  }, [socket]);

  return lobbyInfo ;

};

export { useCreateLobby };