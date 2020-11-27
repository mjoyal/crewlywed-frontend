// import Button from './Button';
// import TextArea from './TextArea';
// import TextInput from './TextInput';
// import NameCard from './NameCard';
// import Timer from './Timer';
// import QuestionResult from './QuestionResult';
// import Question from './Question';
// import AnswerCard from './AnswerCard';
// import AvatarScore from './AvatarScore';
import GameLoop from './Game/GameLoop/index';

export default function Playground (props) {

    // data for the question result 
    const chosers1 = [
      {id: 1, avatarID: 1, username:'mac', creator:true, answered:true},
      {id: 2, avatarID: 2, username:'mac', creator:true, answered:false},
      {id: 3, avatarID: 3, username:'mac', creator:true, answered:false},
      {id: 4, avatarID: 4, username:'mac', creator:true, answered:false},
      {id: 5, avatarID: 5, username:'mac', creator:true, answered:false}
    ];
  
    const chosers2 = [
      {id: 1, avatar: 'images/avatar1.png'},
      {id: 2, avatar: 'images/avatar2.png'},
      {id: 3, avatar: 'images/avatar3.png'},
    ]
  
  return (
    <>
      <GameLoop playerResponses={chosers1}/>
    </>

  )
}

