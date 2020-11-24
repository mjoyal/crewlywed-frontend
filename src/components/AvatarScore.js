import "../styles/AvatarScore.scss";

export default function AvatarScore (props) {
  
  return (
    <div className="avatarScore">
      {props.winner && 
        <>
        <p>{props.name}</p>
        <img src={`${props.avatar}`} alt="player avatar"/>
        <p>{props.score}</p>
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