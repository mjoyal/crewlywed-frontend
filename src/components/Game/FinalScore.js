import AvatarScore from '../AvatarScore';
import "../../styles/RoundScore.scss";
import {Link} from "react-router-dom";

const dummyData = [
  {id: 1, name: 'mac', score: 500, avatar: 'images/avatar1.png'},
  {id: 2, name: 'will', score: 250, avatar: 'images/avatar2.png'},
  {id: 3, name: 'chantal', score: 300, avatar: 'images/avatar3.png'},
  {id: 4, name: 'scooby', score: 200, avatar: 'images/avatar4.png'},
  // {id: 5, name: 'velma', score: 350, avatar: 'images/avatar5.png'},
  // {id: 6, name: 'fred', score: 250, avatar: 'images/avatar6.png'},
  // {id: 7, name: 'shaggy', score: 600, avatar: 'images/avatar7.png'},
];

// const winner = {id: 8, name: 'daphne', score: 200, avatar: 'images/crownAvatar8.png'}; 
// would be good to receive a list of players and then a single winner object. like above. 


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