import AvatarScore from '../../AvatarScore';
import "../../../styles/RoundScore.scss";



const dummyData = [
  {id: 1, name: 'mac', score: 500, avatar: 'images/avatar1.png'},
  {id: 2, name: 'will', score: 250, avatar: 'images/avatar2.png'},
  {id: 3, name: 'chantal', score: 300, avatar: 'images/avatar3.png'},
  {id: 4, name: 'scooby', score: 200, avatar: 'images/avatar4.png'},
  {id: 5, name: 'velma', score: 350, avatar: 'images/avatar5.png'},
  {id: 6, name: 'fred', score: 250, avatar: 'images/avatar6.png'},
  {id: 7, name: 'shaggy', score: 600, avatar: 'images/avatar7.png'},
  {id: 8, name: 'daphne', score: 200, avatar: 'images/avatar8.png'}
];


export default function RoundScore (props) {

  // const dummyData = [1,2,3,4];

  // if(dummyData.length === 3) {
  //   // regular map
  // } else if(dummyData.length > 3 && dummyData.length < 7) {
  //   // const splitAt = Math.ceil(dummyData.length / 2);
  //   const firstArray = dummyData.slice(0, 3);
  //   const secondArray = dummyData.slice(3, dummyData.length);   
  //   const trial = [
  //     firstArray, 
  //     secondArray
  //   ]; 
  //   console.log(trial); 
    
  // } else {
  //   const splitAt = dummyData % 5; 
  //   console.log(dummyData.length % 5); 
  //   const firstArray = dummyData.slice(0, 2);
  //   const secondArray = dummyData.slice(2, 5);
  //   const lastArray = dummyData.slice(5, dummyData.length); 
  // } 


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
    <main className="roundScore">
      {avatarScores}
    </main>
    </>
  );
}