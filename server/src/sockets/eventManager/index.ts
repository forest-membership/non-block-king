import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import TetrisGame from '@/service/map';

export const addKeyPressEvent = (
  client: Socket,
  userNumber: number,
  gameMap: TetrisGame
) => {
  const userName = `user:${userNumber}`;
  console.log(userName);

  client.on('pressUpKey', (data) => {
    sendMessageToUser(client, data);
    if (gameMap.moveMino('UP')) {
      console.log('위로 이동합니다.');
      return sendMessageToUser(client, '블럭을 이동시켰습니다.');
    }

    return sendMessageToUser(client, '블럭을 이동시킬 수 없습니다.');
  });

  client.on('pressDownKey', (data) => {
    sendMessageToUser(client, data);
    const moveSuccess = gameMap.moveMino('DOWN');
    if (moveSuccess) {
      console.log('아래로 이동합니다.');
      return sendMessageToUser(client, '블럭을 이동시켰습니다.');
    }
    gameMap.settleDownMino();
    return sendMessageToUser(client, '블럭을 이동시킬 수 없습니다.');
  });

  client.on('pressLeftKey', (data) => {
    sendMessageToUser(client, data);
    if (gameMap.moveMino('LEFT')) {
      console.log('왼쪽으로 이동합니다.');
      return sendMessageToUser(client, '블럭을 이동시켰습니다.');
    }

    return sendMessageToUser(client, '블럭을 이동시킬 수 없습니다.');
  });

  client.on('pressRightKey', (data) => {
    sendMessageToUser(client, data);
    if (gameMap.moveMino('RIGHT')) {
      console.log('오른쪽으로 이동합니다.');
      return sendMessageToUser(client, '블럭을 이동시켰습니다.');
    }

    return sendMessageToUser(client, '블럭을 이동시킬 수 없습니다.');
  });

  client.on('pressEscapeKey', (data) => {
    sendMessageToUser(client, data);
  });

  client.on('pressLeftRotateKey', (data) => {
    sendMessageToUser(client, data);
    if (gameMap.rotateMino('COUNTER_CLOCK_WISE')) {
      console.log('반시계 방향으로 회전합니다.');
      return sendMessageToUser(client, '블럭을 회전시켰습니다.');
    }
    console.log('회전에 실패했습니다.');
    return sendMessageToUser(client, '회전에 실패했습니다.');
  });

  client.on('pressRightRotateKey', (data) => {
    sendMessageToUser(client, data);
    if (gameMap.rotateMino('CLOCK')) {
      console.log('시계 방향으로 회전합니다.');
      return sendMessageToUser(client, '블럭을 회전시켰습니다.');
    }
    console.log('회전에 실패했습니다.');
    return sendMessageToUser(client, '회전에 실패했습니다.');
  });
};

export const removeAllKeyPressEvents = (client: Socket) => {
  client.removeAllListeners('pressUpKey');
  client.removeAllListeners('pressDownKey');
  client.removeAllListeners('pressLeftKey');
  client.removeAllListeners('pressRightKey');
  client.removeAllListeners('pressEscapeKey');
  client.removeAllListeners('pressLeftRotateKey');
  client.removeAllListeners('pressRightRotateKey');
};
