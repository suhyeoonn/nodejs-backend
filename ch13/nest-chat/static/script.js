const socket = io('http://localhost:3000/chat');
const roomSocket = io('http://localhost:3000/room');
let currentRoom = '';
const nickname = prompt('type nickname');

function sendMessage() {
  if (currentRoom === '') {
    alert('방을 선택해주세요');
    return;
  }
  const message = document.querySelector('#message').value;
  document.querySelector('#chat').innerHTML += `<div>me: ${message}</div>`;
  socket.emit('message', { message, nickname });
}

function createRoom() {
  const room = prompt('type room name');
  roomSocket.emit('createRoom', { room, nickname });
}

socket.on('notice', (data) => {
  document.querySelector('#notice').innerHTML += `<div>${data.message}</div>`;
});

roomSocket.on('rooms', (data) => {
  console.log(data);
  const lis = data.map(
    (room) => `<li>${room} <button onclick="joinRoom('${room}')">join</button>`,
  );
  document.querySelector('#rooms').innerHTML = lis;
});

roomSocket.on('message', (data) => {
  console.log(data);
  document.querySelector('#chat').innerHTML += `<div>${message}</div>`;
});
function joinRoom(room) {
  roomSocket.emit('joinRoom', { room, nickname, toLeaveRoom: currentRoom });
  document.querySelector('#chat').innerHTML = '';
  currentRoom = room;
}

socket.on('connect', () => {
  console.log('connected');
});

socket.on('message', (message) => {
  document.querySelector('#chat').innerHTML += `<div>${message}</div>`;
});
