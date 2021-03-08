import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import {
  addKeyPressEvent,
  removeAllKeyPressEvents,
} from '@/sockets/eventManager';
import { generateRandomString } from '@/utils';
import TetrisMap from '@/service/map';

const generateRoomHashCode = () => generateRandomString(15, '');

const roomManager = (client: Socket, userNumber: number, mode: string) => {
  const roomCode = `${mode}:${generateRoomHashCode()}`;
  const userName = `user:${userNumber}`;
  console.log(userName);

  client.join(roomCode);

  sendMessageToUser(client, '입장하였습니다. 👋');

  client.on('ready', () => {
    // TODO: 참가자가
    sendMessageToUser(client, '게임을 준비하였습니다.');
  });

  client.on('start', () => {
    // TODO: 방의 모든 사람이 준비되었는지 체크해야 함.
    const isAllPlayerOnReady = true;
    if (!isAllPlayerOnReady) return;

    sendMessageToUser(client, '게임 시작! 🔥');

    // TODO: 클라이언트는 아래 데이터를 받아다가 맵을 렌더링한다.
    // const mapState = userGameMap.offerUserMap;
    // sendGameMapToUser(serverSocket, userName, mapState);

    const userGameMap = new TetrisMap();
    addKeyPressEvent(client, userNumber, userGameMap);
  });

  client.on('lose', () => {
    removeAllKeyPressEvents(client);
    sendMessageToUser(client, '패배하였습니다. 😫');
  });

  client.on('quit', () => {
    client.leave('room1');
    sendMessageToUser(client, '퇴장하였습니다. 👋');
  });
};

export default roomManager;
