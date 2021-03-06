import "../styles/QuestionResult.scss";

export default function QuestionResult (props) {
  const getAvatarPath = function () {
    if(props.path) {
      return props.path
    } else {
      return `/images/avatar${props.avatarid}.png`
    }
  }
  const choosers = props.choosers ? props.choosers.map((chooser) => {
    const avatar = chooser.avatar ? chooser.avatar : `/images/avatar${chooser.avatarid}.png`;
    return (
      <img className="player-image" src={avatar} alt="player avatar"/>
    )
  }) : <></>;
  const choosersCount = props.choosers ? props.choosers.length : 0;
  const icon = props.correct ? `/images/correctIcon.png` : `/images/incorrectIcon.png`;

  return (
    <article className="questionResult">
        <div className="icon-container">
          <img className="icon" src={icon} alt="icon"/>
        </div>
      <header>

        <div>
          <img src={`${getAvatarPath()}`} alt="player avatar"/>
          <p>{props.playername}</p>
        </div>
        <p className="answer">{props.answer}</p>
      </header>
      <footer>
        {props.correct && (
          <div>

          <p>{`${choosersCount > 0 ? `winners: ${choosersCount}`: `no winners`}`}</p>
          {choosersCount !== 0 &&  <p>{`${choosersCount <= 1 ? `+100 to ${props.choosers[0].username}`: "+100 to each"}`}</p>}
          </div>
        )}

        {!props.correct && (
          <div >
          <p>{`fooled: ${choosersCount}`}</p>
          <p>{`${props.choosers? `+${50 * props.choosers.length} to ${props.playername}`: ""}`}</p>
          </div>
        )}
        <div className="players">
          {choosers}
        </div>
     </footer>
    </article>
  ); 
};