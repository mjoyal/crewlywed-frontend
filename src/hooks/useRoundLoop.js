import {useState, useEffect} from 'react';

const useRoundLoop = (socket, userProfile) => {

  // STATE
  // This determines which roundLoop component is rendered:
  const [roundState, setRoundState] = useState('ANSWER');

  // This is the unique roundID in the DB, e.g. 338:
  const [uniqueRoundID, setUniqueRoundID] = useState();
  
  // This is the round number shown in the game play, e.g. 1:
  const [currentRound, setCurrentRound] = useState(1);

  // This is the total number of rounds that will be played during the game play, e.g. 24 (8 players * 3 rounds per player):
  const [totalRounds, setTotalRounds] = useState();

  // FUNCTIONALITY
  const submitUserAnswer = function (answer) {
    const round = 1; 
    const userAnswerInfo = {
      answer, 
      round, 
      userProfile
    };
    socket.emit('thisUserSubmitted', (userAnswerInfo));
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
    // Listen for when to show CHOOSE (sent when timer expires for ANSWER):
    socket.on('choosePage', (choices) => {
      console.log(choices) 
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
      setCurrentRound(prev => prev + 1);
      setRoundState('ANSWER');
    });

    // Listen for total number of rounds in game (sent when the host hits "start game"):
    socket.on('initialNumRounds', numQuestions => {
      setTotalRounds(numQuestions);
    })
  }, [socket]);

  // console.log's for testing - will delete later:
  useEffect(() => {
    console.log("totalRounds:", totalRounds);
    console.log("currentRound:", currentRound);
  }, [totalRounds])

  return {roundState, uniqueRoundID, currentRound, totalRounds, submitUserAnswer, sendChoice} ;
};

export { useRoundLoop };