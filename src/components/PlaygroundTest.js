import Button from './Button';
import TextArea from './TextArea';
import TextInput from './TextInput';
import NameCard from './NameCard';
import Timer from './Timer';
import QuestionResult from './QuestionResult';
import Question from './Question';
import AvatarScore from './AvatarScore';


export default function Playground (props) {

    // data for the question result 
    const chosers1 = [
      {id: 1, avatar: 'images/avatar1.png'},
      {id: 2, avatar: 'images/avatar2.png'},
      {id: 3, avatar: 'images/avatar3.png'},
      {id: 4, avatar: 'images/avatar4.png'},
      {id: 5, avatar: 'images/avatar5.png'}
    ];
  
    const chosers2 = [
      {id: 1, avatar: 'images/avatar1.png'},
      {id: 2, avatar: 'images/avatar2.png'},
      {id: 3, avatar: 'images/avatar3.png'},
    ]
  
  return (
    <>
        <p>Avatar Score</p>
        <AvatarScore
          name="mac"
          score={200}
          avatar="images/avatar3.png"
          winner={false}
        />

        <p>Avatar Winner Score</p>

        <AvatarScore
          name="mac"
          score={200}
          avatar="images/crownAvatar3.png"
          winner={true}
        />

        <Button confirm onClick={() => console.log("hello")}>Click me!</Button>
          <TextArea label="your response" placeholder="enter your response here..." maxCount={50}/>
          <TextInput label="your name" placeholder="name" maxCount={8}/>
 
          <p> Host Name Card </p>
          <NameCard
            avatar='https://tcrn.ch/35VAVzn'
            playerName="will"
            host={true}
          />

          <p> Non-host Name Card (spacing is weird because of image sizes, will fix when have real images)</p>
          <NameCard
            avatar='https://tcrn.ch/35VAVzn'
            playerName="will"
            host={false}
          />

          <p>Question Prompt</p>
          <Question avatar="https://tcrn.ch/35VAVzn" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>

        <p>Timer</p>
        <Timer time={60} width={30}></Timer>

        <p>Question Prompt</p>
        <Question avatar="images/avatar3.png" spanClass="span-1">how would <span>mac</span> survive the apocalypse?</Question>

        <p>Question Result (Correct)</p>
        <QuestionResult
          playerName="mac"
          answer="skateboard away"
          correct={true}
          avatar='images/avatar1.png'
          chosers={chosers1}
        />

      <p>Question Result (incorrect selection)</p>
        <QuestionResult
          playerName="mac"
          answer="form a army of babes"
          correct={false}
          avatar='images/avatar1.png'
          chosers={chosers2}
        />
    </>

  )
}

