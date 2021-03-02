import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import {
  addKeyPressEvent,
  removeAllKeyPressEvents,
} from '@/sockets/eventManager';
import TetrisMap from '@/service/map';

const roomManager = (
  serverSocket: any,
  socket: Socket,
  userNumber: number,
  roomName: string
) => {
  const userName = `user:${userNumber}`;
  socket.join(roomName);
  sendMessageToUser(serverSocket, userName, '입장하였습니다.');

  socket.on('ready', () => {
    sendMessageToUser(serverSocket, userName, '게임을 준비하였습니다.');
  });

  socket.on('start', () => {
    // TODO : 방의 모든 사람이 준비되었는지 체크해야 하낟.
    sendMessageToUser(serverSocket, userName, '게임을 시작하였습니다.');

    // TODO : 클라이언트는 아래 데이터를 받아다가 맵을 렌더링한다.
    // const mapState = userGameMap.offerUserMap;
    // sendGameMapToUser(serverSocket, userName, mapState);

    const userGameMap = new TetrisMap();
    addKeyPressEvent(serverSocket, socket, userNumber, userGameMap);
  });

  socket.on('lose', () => {
    removeAllKeyPressEvents(socket);
    sendMessageToUser(serverSocket, userName, '패배하였습니다.');
  });

  socket.on('quit', () => {
    socket.leave('room1');
    sendMessageToUser(serverSocket, userName, '퇴장하였습니다.');
  });
};

export default roomManager;
