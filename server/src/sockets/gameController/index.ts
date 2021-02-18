import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/common';

export const addKeyPressEvent = (
  serverSocket: any,
  socket: Socket,
  userNumber: number
) => {
  const userName = `user:${userNumber}`;
  socket.on('pressUpKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });

  socket.on('pressDownKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });

  socket.on('pressLeftKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });

  socket.on('pressRightKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });

  socket.on('pressEscapeKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });

  socket.on('pressLeftRotateKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });

  socket.on('pressRightRotateKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
  });
};

export const removeKeyPressEvent = (socket: Socket) => {
  socket.removeAllListeners('pressUpKey');
  socket.removeAllListeners('pressDownKey');
  socket.removeAllListeners('pressLeftKey');
  socket.removeAllListeners('pressRightKey');
  socket.removeAllListeners('pressEscapeKey');
  socket.removeAllListeners('pressLeftRotateKey');
  socket.removeAllListeners('pressRightRotateKey');
};
