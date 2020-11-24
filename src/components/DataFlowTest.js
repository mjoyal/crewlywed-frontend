import Button from './Button';


export default function DataFlow (props) {

  const joinRoom = () => {
    console.log('joined room'); 
  }

  return (
    <div className="App">                        
            <header className="App-header">
              <h3> Data flow</h3>
              <p>Get the avatar image for a player:</p>
              <input id="getAvatar" type="text" placeholder="Insert player ID" />
              <Button onClick={props.getAvatar}>Get avatar image</Button>
              <img className="testImage"
                src={props.avatar}
                alt="Avatar"
              />
              <p>Get the current score for a player:</p>
              <input id="getScore" type="text" placeholder="Insert player ID" />
              <Button onClick={props.getScore}>Get current score</Button>
              <p>{props.username}'s current score is {props.score}.</p>
            </header>
        </div>
  ); 
}