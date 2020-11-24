import "../styles/QuestionResult.scss";

export default function QuestionResult (props) {
  
  const chosers = props.chosers.map((choser) => {
    return (
      <img className="player-image" src={`${choser.avatar}`} alt="player avatar"/>
    )
  });

  return (
    <article className="questionResult">
      <header>
        <div>
          <img src={`${props.avatar}`} alt="player avatar"/>
          <p>{props.playerName}</p>
        </div>
        <p className="answer">{props.answer}</p>
      </header>
      <footer>
        {props.correct && (
          <div>
          <p>{`winners: ${props.chosers.length}`}</p>
          <p>{`${props.oneWinner? "+100 ": "+100 to each"}`}</p>
          </div>
        )}

        {!props.correct && (
          <div>
          <p>{`fooled: ${props.chosers.length}`}</p>
          <p>{`+${50 * props.chosers.length} to ${props.playerName}`}</p>
          </div>
        )}
        <div className="players">
          {chosers}
        </div>
     </footer>
    </article>
  ); 
};