import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import TetrisGame from '@/service/map';

export const addKeyPressEvent = (
  serverSocket: any,
  socket: Socket,
  userNumber: number,
  userGameMap: TetrisGame
) => {
  console.log('previewInit : ', userGameMap.previewMinoInit());

  const userName = `user:${userNumber}`;
  socket.on('pressUpKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
    if (userGameMap.moveMino('UP')) {
      console.log('위로 이동합니다.');
      return sendMessageToUser(
        serverSocket,
        userName,
        '블럭을 이동시켰습니다.'
      );
    }

    return sendMessageToUser(
      serverSocket,
      userName,
      '블럭을 이동시킬 수 없습니다.'
    );
  });

  socket.on('pressDownKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
    const moveSuccess = userGameMap.moveMino('DOWN');
    if (moveSuccess) {
      console.log('아래로 이동합니다.');
      return sendMessageToUser(
        serverSocket,
        userName,
        '블럭을 이동시켰습니다.'
      );
    }
    userGameMap.settleDownMino();
    return sendMessageToUser(
      serverSocket,
      userName,
      '블럭을 이동시킬 수 없습니다.'
    );
  });

  socket.on('pressLeftKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
    if (userGameMap.moveMino('LEFT')) {
      console.log('왼쪽으로 이동합니다.');
      return sendMessageToUser(
        serverSocket,
        userName,
        '블럭을 이동시켰습니다.'
      );
    }

    return sendMessageToUser(
      serverSocket,
      userName,
      '블럭을 이동시킬 수 없습니다.'
    );
  });

  socket.on('pressRightKey', (data) => {
    sendMessageToUser(serverSocket, userName, data);
    if (userGameMap.moveMino('RIGHT')) {
      console.log('오른쪽으로 이동합니다.');
      return sendMessageToUser(
        serverSocket,
        userName,
        '블럭을 이동시켰습니다.'
      );
    }

    return sendMessageToUser(
      serverSocket,
      userName,
      '블럭을 이동시킬 수 없습니다.'
    );
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

  socket.on('test', (data) => {
    sendMessageToUser(serverSocket, userName, data);
    userGameMap.getNextMino();
    console.log('next Preview : ', userGameMap.previewMino().name);
  });
};

export const removeAllKeyPressEvents = (socket: Socket) => {
  socket.removeAllListeners('pressUpKey');
  socket.removeAllListeners('pressDownKey');
  socket.removeAllListeners('pressLeftKey');
  socket.removeAllListeners('pressRightKey');
  socket.removeAllListeners('pressEscapeKey');
  socket.removeAllListeners('pressLeftRotateKey');
  socket.removeAllListeners('pressRightRotateKey');
};
