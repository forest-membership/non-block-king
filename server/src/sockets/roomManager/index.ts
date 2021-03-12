import { Socket } from 'socket.io';
import * as MessageManager from '@/sockets/messageManager';
import * as KeyEventManager from '@/sockets/keyEventManager';
import * as GameManager from '@/sockets/gameManager';
import { generateRandomString } from '@/utils';

const HASH_LENGTH = 15;

function generateRoomHashCode() {
  return generateRandomString(HASH_LENGTH, '');
}

function onReady(this: Socket) {
  /** TODO: 현재 준비중인 유저 수 클라이언트에게 전송해주기 */
}

function onStart(this: Socket) {
  // FIXME: 방의 모든 사람이 준비되었는지 체크해야 함.
  const isAllPlayerOnReady = true;
  if (!isAllPlayerOnReady) return;

  KeyEventManager.attachKeyPressEvents(this);
  // FIXME: 해당 방의 모든 참가자에게 게임 인스턴스 할당하는 것으로 변경
  GameManager.initGameMap(this);
  GameManager.startGame(this);
}

// FIXME: 패배 이벤트 클라이언트에서 받는것이 아니라 서버에서 처리 후 클라이언트에게 전송해야 함
// 따라서 roomManager가 아니라 다른 곳으로 이동해야함
// function onLose(this: Socket) {
//   EventManager.detachKeyPressEvents(this);
//   MessageManager.sendMessageToClient(this, 'room:lose', '패배하였습니다. 😫');
// }

function onQuit(this: Socket) {
  this.leave('room1'); // FIXME: room1 대신 실제 roomCode로 바꿔야함
}

function attachRoomEvents(client: Socket) {
  client.on('room:ready', onReady);
  client.on('room:start', onStart);
  client.on('room:quit', onQuit);
}

// TODO: RoomManager 가 유저가 입장 요청을 보냈을 때 적절한 방을 찾아서 매칭해주도록 한다.
// TODO: 접속자를 제외한 해당 roomcode 의 모든 유저들에게 메시지를 emit 하도록 한다.
export function allocateRoom(client: Socket, mode: string) {
  const roomCode = `${mode}:${generateRoomHashCode()}`;

  client.join(roomCode);
  attachRoomEvents(client);
  MessageManager.sendMessageToClient(
    client,
    'room:enter',
    '입장하였습니다. 👋'
  );
}
