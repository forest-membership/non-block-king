import { Socket } from 'socket.io';
import { sendMessageToUser, sendGameMapToUser } from '@/sockets/common';
import { addKeyPressEvent, removeKeyPressEvent } from '../gameController';
import TetrisMap from '@/service/map';

const roomManager = (serverSocket: any, socket: Socket, userNumber: number) => {
  const userName = `user:${userNumber}`;
  const userGameMap = new TetrisMap();
  let isEntered = false;

  socket.on('join', () => {
    if (isEntered) {
      return;
    }
    socket.join('room1');
    sendMessageToUser(serverSocket, userName, '입장하였습니다.');
    const mapState = userGameMap.offerUserMap;
    sendGameMapToUser(serverSocket, userName, mapState);
    // TODO : 게임이 시작됨을 알리는 소켓 이벤트 위치로 이동시킬 것.
    addKeyPressEvent(serverSocket, socket, userNumber);
    isEntered = true;
  });

  socket.on('quit', () => {
    if (!isEntered) {
      return;
    }
    socket.leave('room1');
    sendMessageToUser(serverSocket, userName, '퇴장하였습니다.');
    removeKeyPressEvent(socket);
    isEntered = false;
  });

  socket.on('ready', () => {
    sendMessageToUser(serverSocket, userName, '게임을 준비하였습니다.');
  });

  socket.on('start', () => {
    sendMessageToUser(serverSocket, userName, '게임을 시작하였습니다.');
  });
};

export default roomManager;
