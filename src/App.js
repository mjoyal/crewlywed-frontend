import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
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
    socket.on('avatar', function(playerInfo) {
      console.log(playerInfo);
    });
    }, []);

    const testButton = function() {
      console.log('the button is working when clicked!')
    }; 

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
      <Button confirm onClick={testButton}>Click me!</Button>
      </header> 
    </div>
  );
}

export default App;
