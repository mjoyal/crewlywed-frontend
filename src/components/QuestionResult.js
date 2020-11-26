import "../styles/QuestionResult.scss";



export default function QuestionResult (props) {
  const getAvatarPath = function () {
    if(props.path) {
      return props.path
    } else {
      return `/images/avatar${props.avatarID}.png`
    }
  }
  const choosers = props.choosers.map((chooser) => {
    const avatar = chooser.avatar ? chooser.avatar : `/images/avatar${chooser.avatarID}.png`;
    console.log(avatar);
    return (
      <img className="player-image" src={avatar} alt="player avatar"/>
    )
  });

  return (
    <article className="questionResult">
      <header>
        <div>
          <img src={`${getAvatarPath()}`} alt="player avatar"/>
          <p>{props.playerName}</p>
        </div>
        <p className="answer">{props.answer}</p>
      </header>
      <footer>
        {props.correct && (
          <div>
          <p>{`winners: ${props.choosers.length}`}</p>
          <p>{`${props.oneWinner? "+100 ": "+100 to each"}`}</p>
          </div>
        )}

        {!props.correct && (
          <div>
          <p>{`fooled: ${props.choosers.length}`}</p>
          <p>{`+${50 * props.choosers.length} to ${props.playerName}`}</p>
          </div>
        )}
        <div className="players">
          {choosers}
        </div>
     </footer>
    </article>
  ); 
};