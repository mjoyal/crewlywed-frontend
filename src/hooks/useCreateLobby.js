import {useState, useEffect} from 'react'

// This hook listens for a new host being created and for other new players in the same game being created, and updates the lobby component with their data.

//change the input to useCreateLobby to update userProfileState
const useCreateLobby = (socket) => {

  const [lobbyInfo, setLobbyInfo] = useState(null);
  const [players, setPlayers] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [gameState, setGameState] = useState('LOBBY'); 

  useEffect(() => {
    // Listen for new host created:
    socket.on('createNewHostReturn', hostData => {
      const roomCode = hostData.code;
      setUserProfile(hostData);
      /*
      hostData{
        avatar_id,
        code,
        creator,
        id (user id),
        session id,
        username
      }
      */
      setLobbyInfo(roomCode);
      socket.emit('joinRoom', hostData);
    });

    // Listen for new non-host player created:
    socket.on('createNewPlayerReturn', playerData => {
      const roomCode = playerData.code;
      setUserProfile(playerData);
      setLobbyInfo(roomCode);
      socket.emit('joinRoom', playerData);
    });

    // Listen for list of players in the room:
    socket.on('playersData', playersData => {
      console.log('Data from server:', playersData);
      setPlayers(playersData);
    });

    socket.on('startGame', () => {
      // set state for the gameloop! we playin now bishes
      setGameState('GAMELOOP'); 
    });

    socket.on('finalScore', () => {
      // set state for the gameloop! we playin now bishes
      setGameState('FINALSCORE'); 
    });

  }, [socket]);

  const startGame = function () {
    // tell the server that the host has started the game
    socket.emit('startGame', userProfile.code);

  }

  return {lobbyInfo, players, userProfile, startGame, gameState} ;

};

export { useCreateLobby };