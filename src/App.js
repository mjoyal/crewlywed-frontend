import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 


axios.get(`/players`)
  .then((response) => {
    console.log(response.data.rows); 
  });

function App() {
  console.log('hello'); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>.
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
