import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'; 
import socketIOClient from "socket.io-client";
//const ENDPOINT = 'http://localhost:8080/';




axios.get('/api/players')
  .then((response) => {
    console.log(response.data.players); 
  });


function App() {
 

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT, { transport : ['websocket'] });
  //   socket.on("test", data => {
  //     console.log('server said hi to me!!');
  //   });
  // }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          yyfffy <code>src/App.js</code>.
        </p>
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
