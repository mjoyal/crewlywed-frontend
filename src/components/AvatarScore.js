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
            <img src={`/images/crownAvatar${props.avatar}.png`} className="winner" alt="player avatar"/>
            <p className="score">{props.score}</p>
          </footer>
        </>
      }
      {!props.winner && 
        <>
          <p>{props.name}</p>
          <img src={`/images/avatar${props.avatar}.png`} alt="player avatar"/>
          <p>{props.score}</p>
        </>
      }
    </div>


  );
}