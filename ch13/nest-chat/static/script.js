const socket = io('http://localhost:3000/chat');
const nickname = prompt('type nickname');

function sendMessage() {
  const message = document.querySelector('#message').value;
  document.querySelector('#chat').innerHTML += `<div>me: ${message}</div>`;
  socket.emit('message', { message, nickname });
}

socket.on('connect', () => {
  console.log('connected');
});

socket.on('message', (message) => {
  document.querySelector('#chat').innerHTML += `<div>${message}</div>`;
});
