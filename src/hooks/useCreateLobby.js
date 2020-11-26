import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

const useCreateLobby = (socket) => {

  const [lobbyInfo, setLobbyInfo] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Listen for new host created:
    socket.on('createNewHostReturn', hostData => {
      const roomCode = hostData.code;
      setLobbyInfo(roomCode);
      socket.emit('joinRoom', hostData);
    });

    // Listen for new non-host player created:
    socket.on('createNewPlayerReturn', playerData => {
      const roomCode = playerData.code;
      setLobbyInfo(roomCode);
      socket.emit('joinRoom', playerData);
    });

    // Listen for list of players in the room:
    socket.on('playersData', playersData => {
      console.log('Data from server:', playersData);
      setPlayers(playersData);
    });

  }, [socket]);

  useEffect(() => {
    console.log('Current state:', players);
  }, [players])


  return {lobbyInfo, players} ;

};

export { useCreateLobby };