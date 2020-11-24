import "../styles/AvatarScore.scss";

export default function AvatarScore (props) {
  
  return (
    <div className="avatarScore">
      {props.winner && 
        <>
        <header>
          <img className="decoration" src="images/winnerDecorationLeft.png" alt="winner decoration left"/>
          <p><span className="winnerName">{props.name}</span> wins!</p>
          <img className="decoration" src="images/winnerDecorationRight.png" alt="winner decoration right"/>
        </header>
        <footer>
          <img src={`${props.avatar}`} alt="player avatar"/>
          <p>{props.score}</p>
        </footer>
        </>
      }
      {!props.winner && 
        <>
          <p>{props.name}</p>
          <img src={`${props.avatar}`} alt="player avatar"/>
          <p>{props.score}</p>
        </>
      }
    </div>


  );
}