import {useState, useEffect} from 'react';

const useRoundLoop = (socket, userProfile) => {

  // STATE
  // This determines which roundLoop component is rendered:
  const [roundState, setRoundState] = useState('ANSWER');

  // This is all of the rounds data for the game:
  const [allRoundsData, setAllRoundsData] = useState([]);
      // allRoundsData format:
        // [ {id: 30, victim_id: 16, question_id: 20},
        //   {id: 31, victim_id: 16, question_id: 8},
        //   {id: 32, victim_id: 16, question_id: 10} ]

  // This is the total number of rounds that will be played during the game play, e.g. 24 (8 players * 3 rounds per player):
  const [totalRounds, setTotalRounds] = useState(null);

  // This is the round number shown in the game play, e.g. 1:
  const [currentRoundNum, setCurrentRoundNum] = useState(1);

  // The three below lines are the roundID, victimID, and questionID for the current round:
  const [currentRoundID, setCurrentRoundID] = useState(null);
  const [currentVictimID, setCurrentVictimID] = useState(null);
  const [currentQuestionID, setCurrentQuestionID] = useState(null);

  // The below is an array of players & their status (for use on the AWAIT page):
  const [awaitState, setAwait] = useState([]);

  // The below is submissions for the current round:
  const [currentSubmissions, setCurrentSubmissions] = useState([]); 

  // FUNCTIONALITY

  const submitUserAnswer = function (answer) {
    const round = currentRoundID; 
    const userAnswerInfo = {
      answer,
      round,
      userProfile
    };
    socket.emit('thisUserSubmitted', userAnswerInfo);
    setRoundState('AWAIT'); 
  };

  const sendChoice = function (choice) {
    const round = currentRoundID; 
    const userChoiceInfo = {
      choice, 
      round, 
      userProfile
    }; 
    // send the choice on chooseAnswer button click
    socket.emit('userChoice', userChoiceInfo);
    setRoundState('AWAIT'); 
  };

  const updateRound = function (newRoundID) {
    socket.emit('currentRound', newRoundID);
  }

  useEffect(() => {
    // TRANSITIONS:
    // Listen for when to show CHOOSE (sent when timer expires for ANSWER):
    socket.on('choosePage', (choices) => {
      setCurrentSubmissions(choices); 
      console.log(choices) 

      // the server says the timer is up, display the choose page
      setRoundState('CHOOSE');
      //reset await state
      setAwait([]);
    });

    // Listen for when to show REVEAL (sent when timer expires for CHOOSE):
    socket.on('revealPage', () => {
      setRoundState('REVEAL');
      //reset await state
      setAwait([]);
    })

    // Listen for when to show ROUNDSCORE (sent when timer expires for REVEAL):
    socket.on('roundScore', () => {
      setRoundState('ROUNDSCORE'); 
    });

    // Listen for when to show ANSWER for next round (sent when timer expires for REVEAL):
    socket.on('roundOver', () => {
      setCurrentRoundNum(prev => prev+1);
      setRoundState('ANSWER');
    });

    // DATA FROM DATABASE:
    // Listen for all rounds data for game (sent when the host hits "start game"):
    socket.on('allRoundsData', data => {
      setAllRoundsData(data);
      setTotalRounds(data.length);
      setCurrentRoundID(data[0].id);
      setCurrentVictimID(data[0].victim_id);
      setCurrentQuestionID(data[0].question_id);
    });

    socket.on('awaitData', (awaitData) => {
      setAwait(awaitData);
      console.log(awaitData);
    });
    
  }, [socket]);

  // Update current roundID, victimID, and questionID when currentRoundNum changes:
  useEffect(() => {
    if (currentRoundNum > totalRounds) {
      console.log("No more rounds", currentRoundNum, totalRounds);
      socket.emit('noMoreRounds')
    }
    else if (allRoundsData.length > 0) {
      setCurrentRoundID(allRoundsData[currentRoundNum-1].id);
      setCurrentVictimID(allRoundsData[currentRoundNum-1].victim_id);
      setCurrentQuestionID(allRoundsData[currentRoundNum-1].question_id);
    }
  }, [currentRoundNum]);

  useEffect(()=> {
    socket.emit('newRound', currentRoundID);
  }, [currentRoundID])

  // console.log's for testing - will delete later:
  useEffect(() => {
    console.log("roundState:", roundState);
    console.log("allRoundsData:", allRoundsData);
    console.log("totalRounds:", totalRounds);
    console.log("currentRoundNum:", currentRoundNum);
    console.log("currentRoundID:", currentRoundID);
    console.log("currentVictimID:", currentVictimID);
    console.log("currentQuestionID:", currentQuestionID);
  }, [roundState, allRoundsData, totalRounds, currentRoundNum, currentRoundID, currentVictimID, currentQuestionID]);

  return {roundState, allRoundsData, totalRounds, currentRoundNum, currentRoundID, currentVictimID, currentQuestionID, currentSubmissions, awaitState, submitUserAnswer, sendChoice} ;
};

export { useRoundLoop };