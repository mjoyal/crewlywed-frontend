import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

  const [lobbyInfo, setLobbyInfo] = useState(null);

  useEffect(() => {
    //was listening for createNewHostReturn
    socket.on('gameCodeReturn', createNewHostData => {
      // console.log('data sent back from server:', createNewHostData.id);
      setLobbyInfo(createNewHostData);
      // window.location.href = createNewHostData.id;
      // console.log('lobbyInfo:', lobbyInfo);
    });
    // socket.on('createNewPlayerReturn', createNewPlayerData => {
    // });
  }, [socket]);

  useEffect(() => {
    console.log(lobbyInfo);
  }, [lobbyInfo]);


  return lobbyInfo ;

};

export { useCreateLobby };