import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

  const [lobbyInfo, setLobbyInfo] = useState(null);
  const [players, setPlayers] = useState(["TESTING"]);

  useEffect(() => {
    // Listen for new host created:
    socket.on('createNewHostReturn', hostData => {
      console.log('hostData:', hostData)
      const roomCode = hostData.code;
      setLobbyInfo(roomCode);
      socket.emit('joinRoom', roomCode); 
    });

    //Listen for new non-host player created:
    socket.on('createNewPlayerReturn', playerData => {
      console.log('playerData:', playerData)
      const roomCode = playerData.code;
      setLobbyInfo(roomCode);
      socket.emit('joinRoom', roomCode);
    });

    // Listen for current players in room data:
    socket.on('allPlayersData', allPlayersData => {
      console.log('allPlayersData:', allPlayersData);
      setPlayers(allPlayersData);
    });

  }, [socket]);

  useEffect(() => {
    console.log('players State:', players);
  }, [players])


  return lobbyInfo ;

};

export { useCreateLobby };