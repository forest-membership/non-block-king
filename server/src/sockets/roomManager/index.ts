import { Socket } from 'socket.io';
import { addKeyPressEvent, removeKeyPressEvent } from '../gameController';

const roomManager = (serverSocket: any, socket: Socket, userNumber: number) => {
  socket.on('join', () => {
    socket.join('room1');
    serverSocket.to(`user:${userNumber}`).emit('message', '입장하였습니다.');
    addKeyPressEvent(serverSocket, socket, userNumber);
  });

  socket.on('quit', () => {
    socket.leave('room1');
    serverSocket.to(`user:${userNumber}`).emit('message', '퇴장하였습니다.');
    removeKeyPressEvent(socket);
  });

  socket.on('ready', () => {
    serverSocket.to(`user:${userNumber}`).emit('message', '준비하였습니다.');
  });

  socket.on('start', () => {
    serverSocket
      .to(`user:${userNumber}`)
      .emit('message', '방장이 게임을 시작하였습니다.');
  });
};

export default roomManager;
