import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import {useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://localhost:8080";


function App() {
  // const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    setLoading(false);
    // const data = {
    //   id: 1, 
    //   name: 'will'
    // }
    // socket.emit('trial', (data) => {

    // });
    
    socket.on('avatar', function(playerInfo) {
      console.log(playerInfo);
    });
  }, []);




  
  // useEffect(() => {
  //   Promise.resolve(axios.get('/api/players'))
  //   .then((response) => {
  //     setPlayers(response.data.players);
  //     setLoading(false);
  //   })
  // }, []);

  if (loading) {
    return null;
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
