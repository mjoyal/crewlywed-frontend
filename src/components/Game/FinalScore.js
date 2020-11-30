import AvatarScore from '../AvatarScore';
import "../../styles/RoundScore.scss";
import {Link} from "react-router-dom";

export default function FinalScore (props) {
  const winner = props.finalScore ? props.finalScore[0] : {};
  const avatarScores = props.finalScore.map((avatarScore, index) => {
    if(index > 0) {
      return (
        <AvatarScore
          key={avatarScore.id}
          name={avatarScore.username}
          score={avatarScore.total}
          avatar={avatarScore.avatar_id}
          winner={false}
        />
      );
    }
    else return null;
  });
  return (
    <>
      <h1>final score:</h1>
      <main>
        <AvatarScore
              nkey={winner.id}
              name={winner.username}
              score={winner.total}
              avatar={winner.avatar_id}
              winner={true}
            />
        <div className="losers">
          {avatarScores}
        </div>
        <Link className="button button-link" to="/">play again</Link>
      </main>
    </>
  );
}