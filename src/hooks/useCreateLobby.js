import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

  const [lobbyInfo, setLobbyInfo] = useState(null);

  useEffect(() => {
    socket.on('createNewHostReturn', hostData => {
      console.log('hostData:', hostData)
      setLobbyInfo(hostData.code);
    });
    socket.on('createNewPlayerReturn', playerData => {
      console.log('playerData:', playerData)
      setLobbyInfo(playerData.code);
    });
  }, [socket]);

  useEffect(() => {
    console.log('lobbyInfo:', lobbyInfo);
  }, [lobbyInfo]);


  return lobbyInfo ;

};

export { useCreateLobby };