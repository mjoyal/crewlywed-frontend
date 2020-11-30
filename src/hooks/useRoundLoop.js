import {useState, useEffect} from 'react';

const useRoundLoop = (socket, userProfile) => {

  // STATE
  // This determines which roundLoop component is rendered:
  const [roundState, setRoundState] = useState('ANSWER');

  // This is all of the rounds data for the game:
  const [allRoundsData, setAllRoundsData] = useState([]);
    /* 
      allRoundsData format:
        [ {id: 30, victim_id: 20, question_id: 10, question_text: 'What's $name's favorite color?', victim_avatar_id: 2, victim_name: 'Will'},
        {id: 31, victim_id: 20, question_id: 5, question_text: 'What's $name's favorite movie?', victim_avatar_id: 2, victim_name: 'Will'},
        {id: 32, victim_id: 20, question_id: 16, question_text: 'What's $name's favorite animal?', victim_avatar_id: 2, victim_name: 'Will'} ]
    */

  // This is the total number of rounds that will be played during the game play, e.g. 24 (8 players * 3 rounds per player):
  const [totalRounds, setTotalRounds] = useState(null);

  // This is the round number shown in the game play, e.g. 1:
  const [currentRoundNum, setCurrentRoundNum] = useState(1);

  // The below lines are to keep track of all relevant data for the current round:
  const [currentRoundID, setCurrentRoundID] = useState(null);
  const [currentVictimID, setCurrentVictimID] = useState(null);
  const [currentVictimAvatarID, setCurrentVictimAvatarID] = useState(null);
  const [currentVictimName, setCurrentVictimName] = useState(null);
  const [currentQuestionID, setCurrentQuestionID] = useState(null);
  const [currentQuestionText, setCurrentQuestionText] = useState('Placeholder question'); //need a string here as initialization value or else we can an error

  // The below is an array of players & their status (for use on the AWAIT page):
  const [awaitState, setAwait] = useState([]);

  // The below is submissions for the current round:
  const [currentSubmissions, setCurrentSubmissions] = useState([]); 

  // state to save and display reveal data
  const [revealState, setRevealState] = useState([]);

  //state to save and display score data
  const [roundScoreState, setScore] = useState([]);


  // color state 
  const [backgroundColor, setBackgroundColor] = useState('body'); 
  const [highlightColor, setHighlightColor] = useState(''); 

  useEffect(() => {  
    document.body.classList.add(backgroundColor); 
  }, [backgroundColor])

    // SET COLORS
    useEffect(() => {
      document.body.classList.remove(backgroundColor); 
      setBackgroundColor(`color-${currentVictimAvatarID}`);
      setHighlightColor(`span-${currentVictimAvatarID}`);
    }, [currentVictimAvatarID])
  

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
    socket.on('revealPage', (revealData) => {
      setRoundState('REVEAL');
      console.log("revealData:", revealData);
      setRevealState(revealData);
      //reset await state
      setAwait([]);
    })

    // Listen for when to show ROUNDSCORE (sent when timer expires for REVEAL):
    socket.on('roundScore', (scoreData) => {
      console.log(scoreData);
      setScore(scoreData);
      setRoundState('ROUNDSCORE'); 
    });

    // Listen for when to show ANSWER for next round (sent when timer expires for REVEAL):
    socket.on('roundOver', () => {
      setCurrentRoundNum(prev => prev + 1);
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
      setCurrentVictimAvatarID(data[0].victim_avatar_id);
      setCurrentVictimName(data[0].victim_name);
      setCurrentQuestionText(data[0].question_text);
      setBackgroundColor(`color-${data[0].victim_avatar_id}`);
      setHighlightColor(`span-${data[0].victim_avatar_id}`)
    });

    socket.on('awaitData', (awaitData) => {
      setAwait(awaitData);
      console.log(awaitData);
    });
    
  }, [socket]);

  // Update current roundID, victimID, and questionID when currentRoundNum changes:
  useEffect(() => {
    if (currentRoundNum > totalRounds) {
      console.log("finalScore", roundScoreState);
      socket.emit('noMoreRounds')
    }
    else if (allRoundsData.length > 0) {
      setCurrentRoundID(allRoundsData[currentRoundNum-1].id);
      setCurrentVictimID(allRoundsData[currentRoundNum-1].victim_id);
      setCurrentQuestionID(allRoundsData[currentRoundNum-1].question_id);
      setCurrentVictimAvatarID(allRoundsData[currentRoundNum-1].victim_avatar_id);
      setCurrentVictimName(allRoundsData[currentRoundNum-1].victim_name);
      setCurrentQuestionText(allRoundsData[currentRoundNum-1].question_text);
    }
  }, [currentRoundNum]);

  useEffect(()=> {
    socket.emit('newRound', currentRoundID);
  }, [currentRoundID])

  // console.log's for testing - will delete later:
  useEffect(() => {
    // console.log("roundState:", roundState);
    // console.log("allRoundsData:", allRoundsData);
    // console.log("totalRounds:", totalRounds);
    // console.log("currentRoundNum:", currentRoundNum);
    // console.log("currentRoundID:", currentRoundID);
    // console.log("currentVictimID:", currentVictimID);
    // console.log("currentQuestionID:", currentQuestionID);
    // console.log("currentVictimAvatarID:", currentVictimAvatarID);
    // console.log("currentVictimName:", currentVictimName);
    // console.log("currentQuestionText:", currentQuestionText);
    console.log("scores", roundScoreState);
  }, [roundState, allRoundsData, totalRounds, currentRoundNum, currentRoundID, currentVictimID, currentQuestionID, currentVictimAvatarID, currentVictimName, currentQuestionText, roundScoreState]);
  
  return {roundState, allRoundsData, totalRounds, currentRoundNum, currentRoundID, currentVictimID, currentVictimName, currentVictimAvatarID, currentQuestionID, currentQuestionText, currentSubmissions, awaitState, submitUserAnswer, sendChoice, revealState, roundScoreState, highlightColor} ;
};

export { useRoundLoop };