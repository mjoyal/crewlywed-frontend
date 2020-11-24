import {useState} from 'react';

const useDataFlow = (socket) => {
  const [avatar, setAvatar] = useState("https://www.seekpng.com/png/small/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png");
  const [username, setUsername] = useState("______");
  const [score, setScore] = useState("___");

  const getAvatar = function () {
    const userID = document.querySelector('#getAvatar').value;
    socket.emit('getAvatar', userID)
  };
  socket.on('avatarReturn', avatar => {
    setAvatar(avatar);
  });

  const getScore = function () {
    const userID = document.querySelector('#getScore').value;
    socket.emit('getScore', userID)
  };
  socket.on('scoreReturn', scoreData => {
    setUsername(scoreData.username);
    setScore(scoreData.total_score);
  });

  return { avatar, getAvatar, username, score, getScore };

};

export { useDataFlow };