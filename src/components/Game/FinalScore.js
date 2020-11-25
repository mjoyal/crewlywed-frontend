import AvatarScore from '../AvatarScore';
import "../../styles/RoundScore.scss";


const dummyData = [
  {id: 1, name: 'mac', score: 500, avatar: 'images/avatar1.png'},
  {id: 2, name: 'will', score: 250, avatar: 'images/avatar2.png'},
  {id: 3, name: 'chantal', score: 300, avatar: 'images/avatar3.png'},
  {id: 4, name: 'scooby', score: 200, avatar: 'images/avatar4.png'},
  // {id: 5, name: 'velma', score: 350, avatar: 'images/avatar5.png'},
  // {id: 6, name: 'fred', score: 250, avatar: 'images/avatar6.png'},
  // {id: 7, name: 'shaggy', score: 600, avatar: 'images/avatar7.png'},
];

const winner = {id: 8, name: 'daphne', score: 200, avatar: 'images/crownAvatar8.png'}; 
// would be good to receive a list of players and then a single winner object. like above. 


export default function FinalScore () {

  const avatarScores = dummyData.map((avatarScore, index) => {
    return (
       <AvatarScore
          key={avatarScore.id}
          name={avatarScore.name}
          score={avatarScore.score}
          avatar={avatarScore.avatar}
          winner={false}
        />
    );
  })
  return (
    <>
    <h1>final score:</h1>
    <main>
     <AvatarScore
          name={winner.name}
          score={winner.score}
          avatar={winner.avatar}
          winner={true}
        />
      <div className="losers">
      {avatarScores}
      </div>
      
    </main>
    </>
  );
}