import { Socket } from 'socket.io';

export const addKeyPressEvent = (
  serverSocket: any,
  socket: Socket,
  userNumber: number
) => {
  socket.on('pressUpKey', () => {
    serverSocket.to(`user:${userNumber}`).emit('message', '업을 눌렀습니다.');
  });

  socket.on('pressDownKey', () => {
    serverSocket.to(`user:${userNumber}`).emit('message', '다운을 눌렀습니다.');
  });

  socket.on('pressLeftKey', () => {
    serverSocket.to(`user:${userNumber}`).emit('message', '왼쪽을 눌렀습니다.');
  });

  socket.on('pressRightKey', () => {
    serverSocket
      .to(`user:${userNumber}`)
      .emit('message', '오른쪽을 눌렀습니다.');
  });

  socket.on('pressEscapeKey', () => {
    serverSocket.to(`user:${userNumber}`).emit('message', 'ESC를 눌렀습니다.');
  });

  socket.on('pressLeftRotateKey', () => {
    serverSocket.to(`user:${userNumber}`).emit('message', 'Z를 눌렀습니다.');
  });

  socket.on('pressRightRotateKey', () => {
    serverSocket.emit('message', 'X를 눌렀습니다.');
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
