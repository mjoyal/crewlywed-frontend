import AvatarScore from '../../AvatarScore';
import "../../../styles/RoundScore.scss";

export default function RoundScore (props) {

  const avatarScores = props.scoreData.map((avatarScore, index) => {
    return (
       <AvatarScore
          key={avatarScore.id}
          name={avatarScore.username}
          score={avatarScore.total}
          avatar={avatarScore.avatar_id}
          winner={false}
        />
    );
  })
  return (
    <>
      <h1>current score:</h1>
      <div className="roundScore">
        {avatarScores}
      </div>
    </>
  );
}