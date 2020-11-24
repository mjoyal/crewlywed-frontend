import "../styles/QuestionResult.scss";
import classNames from 'classnames';

export default function QuestionResult (props) {
  
  return (
    <article className="questionResult">
      <header>
        <div>
          <img src={`${props.avatar}`} alt="player avatar"/>
          <p>{props.playerName}</p>
        </div>
        <p>{props.answer}</p>
      </header>
      <footer>
        {props.correct && (
          <>
          <p>{`winners: ${props.numWinners}`}</p>
          <p>{`${props.oneWinner? "+100 ": "+100 to each"}`}</p>
          </>
        )}

        {!props.correct && (
          <>
          <p>{`fooled: ${props.numFooled}`}</p>
          <p>{`+50 to ${props.playerName}`}</p>
          </>
        )}

      </footer>
    </article>
  ); 
};