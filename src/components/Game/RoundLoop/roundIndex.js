import React, { useEffect, useState } from 'react';


import Question from '../../Question';
// import Timer from '../../Timer';

import SimpleTimer from '../../SimpleTimer';
import RoundScore from './RoundScore';
import "../../../styles/partials/_global.scss";
import InputAnswerPage from './Answer.js';
import ChooseAnswerPage from './Choose';
import RevealAnswerPage from './Reveal';
import AwaitResponsePage from './Await';


const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";

const answerOptions = [
  {
    text:"skateboard away",
    id:1
  },
  {
    text:"sass the zombies away",
    id:2
  },
  {
    text:"form a tribe full of babes",
    id:3
  },
  {
    text:"I need to make something a total of seventy characters so I'm writing.",
    id:4
  },
  {
    text:"sass the zombies away",
    id:5
  },
  {
    text:"form a tribe full of babes",
    id:6
  },
  {
    text:"skateboard away",
    id:7
  },
  {
    text:"sass the zombies away",
    id:8
  }
]

const answerResults = [
  {
    playername:"mac",
    avatarid:1,
    correct:true,
    answer:"form a tribe full of babes",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"will",
    avatarid:2,
    correct:false,
    answer:"skateboard away",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"mac",
    avatarid:1,
    correct:false,
    answer:"form a tribe full of babes",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"will",
    avatarid:2,
    correct:false,
    answer:"skateboard away",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"mac",
    avatarid:1,
    correct:false,
    answer:"form a tribe full of babes",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"will",
    avatarid:2,
    correct:false,
    answer:"skateboard away",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"mac",
    avatarid:1,
    correct:false,
    answer:"form a tribe full of babes",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  },
  {
    playername:"will",
    avatarid:2,
    correct:false,
    answer:"skateboard away",
    choosers:[
      { 
        username: "will",
        avatarid: 2
      },
      { 
        username: "chantal",
        avatarid: 3
      }
    ]
  }
]

const responseTest = [
  {id: 1, avatar_id: 1, username:'mac', creator:false, answered:true},
  {id: 2, avatar_id: 2, username:'mac', creator:false, answered:false},
  {id: 3, avatar_id: 3, username:'mac', creator:false, answered:true},
  {id: 4, avatar_id: 4, username:'mac', creator:false, answered:false},
  {id: 5, avatar_id: 5, username:'mac', creator:false, answered:false},
  {id: 2, avatar_id: 2, username:'mac', creator:false, answered:false},
  {id: 3, avatar_id: 3, username:'mac', creator:false, answered:true},
  {id: 4, avatar_id: 4, username:'mac', creator:false, answered:false},
];

const scoreTest = [
  {id: 1, avatar_id: 1, username:'mac', total:100, winner:false},
  {id: 2, avatar_id: 2, username:'mac', total:100, winner:false},
  {id: 3, avatar_id: 3, username:'mac', total:100, winner:false},
  {id: 4, avatar_id: 4, username:'mac', total:100, winner:false},
  {id: 5, avatar_id: 5, username:'mac', total:100, winner:false},
  {id: 6, avatar_id: 2, username:'mac', total:100, winner:false},
  {id: 7, avatar_id: 3, username:'mac', total:100, winner:false},
  {id: 8, avatar_id: 4, username:'mac', total:100, winner:false}
]
export default function RoundLoop (props) {
  const [hideTimer, setHideTimer] = useState(false); 

  useEffect(() => {
    if(props.roundState === REVEAL || props.roundState === ROUNDSCORE) {
      return setHideTimer(true); 
    }
    setHideTimer(false);
  }, [props.roundState]);; 

  return (
    <div className="roundLoop">
      {props.roundState !== ROUNDSCORE && <>
        <Question
          victimAvatar={`images/avatar${props.victimAvatarId}.png`}
          victimColorClass={props.victimColorClass}
          question={props.question}
          questionVictimText={props.questionVictimText}
          victimName={props.victimName}
          isVictim={props.isVictim}
        />
        <SimpleTimer
          time={10} 
          currentRoundNum={props.currentRoundNum}
          totalRounds={props.totalRounds}
          hide={hideTimer}
        />
      </>}
      {props.roundState === ROUNDSCORE && <>
        <RoundScore scoreData={props.roundScoreState}/>
      </>}

      {props.roundState === ANSWER && 
      <InputAnswerPage 
        submitUserAnswer={props.submitUserAnswer}  
        currentRoundNum={props.currentRoundNum}
        totalRounds={props.totalRounds}
      />}

      {props.roundState  === CHOOSE && 
      <ChooseAnswerPage 
        answerOptions={props.currentSubmissions} 
        victimName={props.victimName} 
        sendChoice={props.sendChoice} 
        isVictim={props.isVictim}
        userID={props.userID}
        currentRoundNum={props.currentRoundNum}
        totalRounds={props.totalRounds}
      />}

      {props.roundState  === REVEAL && <RevealAnswerPage answerResults={props.revealState}/>}
      {props.roundState === AWAIT && <AwaitResponsePage players={props.awaitState}/>}

    </div>
  );
}