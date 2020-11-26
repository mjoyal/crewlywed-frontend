// import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

  const lobbyInfo = "Hi";

  // const [lobbyInfo, setLobbyInfo] = useState([]);

  // useEffect(() => {
  //   socket.on('createNewHostReturn', createNewHostData => {
  //     console.log('data from server:', createNewHostData);
  //     setLobbyInfo(createNewHostData);
  //     console.log('lobbyInfo:', lobbyInfo);
  //   });
  //   socket.on('createNewPlayerReturn', createNewPlayerData => {
  //   });
  // }, [socket]);

  return lobbyInfo ;

};

export { useCreateLobby };