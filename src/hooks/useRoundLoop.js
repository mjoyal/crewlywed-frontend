import {useState, useEffect} from 'react';

const useRoundLoop = (socket, userProfile) => {

  // STATE
  // This determines which roundLoop component is rendered:
  const [roundState, setRoundState] = useState('ANSWER');

  // This is all of the rounds data for the game:
  const [allRoundsData, setAllRoundsData] = useState();
      // allRoundsData format:
        // [ {id: 30, victim_id: 16, question_id: 20},
        //   {id: 31, victim_id: 16, question_id: 8},
        //   {id: 32, victim_id: 16, question_id: 10} ]

  // This is the total number of rounds that will be played during the game play, e.g. 24 (8 players * 3 rounds per player):
  const [totalRounds, setTotalRounds] = useState();

  // This is the round number shown in the game play, e.g. 1:
  const [currentRoundNum, setCurrentRoundNum] = useState(1);

  // The three below lines are the roundID, victimID, and questionID for the current round:
  const [currentRoundID, setCurrentRoundID] = useState();
  const [currentVictimID, setCurrentVictimID] = useState();
  const [currentQuestionID, setCurrentQuestionID] = useState();

  // FUNCTIONALITY
  const submitUserAnswer = function (answer) {
    const round = 1; 
    const userAnswerInfo = {
      answer, 
      round, 
      userProfile
    };
    socket.emit('thisUserSubmitted', userAnswerInfo);
    setRoundState('AWAIT'); 
  };

  const sendChoice = function (choice) {
    const round = 1; 
    const userChoiceInfo = {
      choice, 
      round, 
      userProfile
    }; 
    // send the choice on chooseAnswer button click
    socket.emit('userChoice');
    setRoundState('AWAIT'); 
  };

  useEffect(() => {
    // TRANSITIONS:
    // Listen for when to show CHOOSE (sent when timer expires for ANSWER):
    socket.on('choosePage', (choices) => {
      setRoundState('CHOOSE');
    });

    // Listen for when to show REVEAL (sent when timer expires for CHOOSE):
    socket.on('revealPage', () => {
      setRoundState('REVEAL');
    });

    // Listen for when to show ROUNDSCORE (sent when timer expires for REVEAL):
    socket.on('roundScore', () => {
      setRoundState('ROUNDSCORE'); 
    });

    // Listen for when to show ANSWER for next round (sent when timer expires for REVEAL):
    socket.on('roundOver', () => {
      setCurrentRoundNum(prev => prev + 1);
      setRoundState('ANSWER');
    });

    // DATA FROM DATABASE:
    // Listen for total number of rounds in game (sent when the host hits "start game"):

    // Listen for all rounds data for game (sent when the host hits "start game"):
    socket.on('allRoundsData', allRoundsData => {
      setAllRoundsData(allRoundsData);
      setTotalRounds(allRoundsData.length);
    });
  }, [socket]);

  // console.log's for testing - will delete later:
  useEffect(() => {
    console.log("totalRounds:", totalRounds);
    console.log("currentRoundNum:", currentRoundNum);
    console.log("allRoundsData:", allRoundsData)
  }, [totalRounds, currentRoundNum, allRoundsData]);

  return {roundState, allRoundsData, totalRounds, currentRoundNum, submitUserAnswer, sendChoice} ;
};

export { useRoundLoop };