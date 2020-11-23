import './App.css';
// import axios from 'axios';
import {useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client';

import Button from './components/Button';
import TextArea from './components/TextArea';

import logo from './logo.svg';


const ENDPOINT = "http://localhost:8080";


function App() {
  // const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

 
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   setLoading(false);  
  //   socket.on('avatar', function(playerInfo) {
  //     console.log(playerInfo);
  //   });
  //   }, []);

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

  // if (loading) {
  //   return null;
  // };


  return (
    <div className="App">
      <header className="App-header">
      <Button confirm onClick={testButton}>Click me!</Button>
      </header> 
      <TextArea label="your response" placeholder="enter your response here..." maxCount={50}/>
    </div>
  );
}

export default App;
