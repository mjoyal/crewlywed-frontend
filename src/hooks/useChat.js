import {useEffect} from 'react';

const useChat = (socket) => {
  const joinRoom = function () {
    const roomCode = document.querySelector('#test').value;
    console.log('join room!')
    socket.emit('join room', roomCode); 
  };
  const sendMessage = function () {
    const message = document.querySelector('#message-test').value;
    const name = document.querySelector('#name-test').value;
    const room = document.querySelector('#test').value;
    const messageData = {
      message, 
      name, 
      room
    }
    socket.emit('message', messageData);
  };
  useEffect(() => {
    socket.on('message', messageData => {
      console.log('message', messageData.message);
      console.log('from:', messageData.name);
    });  
  }, [socket]);

  return { joinRoom, sendMessage };
};

export { useChat };