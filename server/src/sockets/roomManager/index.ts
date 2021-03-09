import { Socket } from 'socket.io';
import * as MessageManager from '@/sockets/messageManager';
import * as EventManager from '@/sockets/eventManager';
import * as GameManager from '@/sockets/gameManager';
import { generateRandomString } from '@/utils';

const HASH_LENGTH = 15;

function generateRoomHashCode() {
  return generateRandomString(HASH_LENGTH, '');
}

function onReady(this: Socket) {
  MessageManager.sendMessageToUser(this, '게임을 준비하였습니다.');
}

function onStart(this: Socket) {
  // FIXME: 방의 모든 사람이 준비되었는지 체크해야 함.
  const isAllPlayerOnReady = true;
  if (!isAllPlayerOnReady) return;

  // FIXME: 해당 방의 모든 참가자에게 게임 인스턴스 할당하는 것으로 변경
  GameManager.initGameMap(this.id);
  EventManager.attachKeyPressEvents(this);
  MessageManager.sendMessageToUser(this, '게임 시작! 🔥');
}

function onLose(this: Socket) {
  EventManager.detachKeyPressEvents(this);
  MessageManager.sendMessageToUser(this, '패배하였습니다. 😫');
}

function onQuit(this: Socket) {
  this.leave('room1'); // FIXME: room1 대신 실제 roomCode로 바꿔야함
  MessageManager.sendMessageToUser(this, '퇴장하였습니다. 👋');
}

function attachRoomEvents(client: Socket) {
  client.on('ready', onReady);
  client.on('start', onStart);
  client.on('lose', onLose);
  client.on('quit', onQuit);
}

// TODO: RoomManager 가 유저가 입장 요청을 보냈을 때 적절한 방을 찾아서 매칭해주도록 한다.
export function allocateRoom(client: Socket, mode: string) {
  const roomCode = `${mode}:${generateRoomHashCode()}`;

  client.join(roomCode);
  attachRoomEvents(client);
  MessageManager.sendMessageToUser(client, '입장하였습니다. 👋');
}
