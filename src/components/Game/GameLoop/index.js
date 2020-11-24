import React from 'react';
import { useParams } from 'react-router-dom';

import Question from '../../Question';
import Timer from '../../Timer';

const ANSWER = "ANSWER";
const AWAIT = "AWAIT";
const CHOOSE = "CHOOSE";
const REVEAL = "REVEAL";
const ROUNDSCORE = "ROUNDSCORE";

export default function GameLoop (props) {
  const params = useParams();
  console.log(params);
  return (
    <div>
      {!ROUNDSCORE && <>
        <Question/>
        <Timer />
      </>}
    </div>
  );
}