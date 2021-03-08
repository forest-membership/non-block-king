import { Socket } from 'socket.io';
import * as MessageManager from '@/sockets/messageManager';
import * as GameManager from '@/sockets/gameManager';

function onKeyPressUp(this: Socket) {
  GameManager.moveMino(this.id, 'UP');
}

function onKeyPressDown(this: Socket) {
  GameManager.moveMino(this.id, 'DOWN');
}

function onKeyPressLeft(this: Socket) {
  GameManager.moveMino(this.id, 'LEFT');
}

function onKeyPressRight(this: Socket) {
  GameManager.moveMino(this.id, 'RIGHT');
}

function onKeyPressLeftRotate(this: Socket) {
  GameManager.rotateMino(this.id, 'COUNTER_CLOCK_WISE');
}

function onKeyPressRightRotate(this: Socket) {
  GameManager.rotateMino(this.id, 'CLOCK');
}

function onKeyPressEscape(this: Socket) {
  MessageManager.sendMessageToUser(this, '이스케이프 입력');
}

export function attachKeyPressEvents(client: Socket) {
  client.on('pressUpKey', onKeyPressUp);
  client.on('pressDownKey', onKeyPressDown);
  client.on('pressLeftKey', onKeyPressLeft);
  client.on('pressRightKey', onKeyPressRight);
  client.on('pressLeftRotateKey', onKeyPressLeftRotate);
  client.on('pressRightRotateKey', onKeyPressRightRotate);
  client.on('pressEscapeKey', onKeyPressEscape);
}

export function removeAllKeyPressEvents(client: Socket) {
  client.removeAllListeners('pressUpKey');
  client.removeAllListeners('pressDownKey');
  client.removeAllListeners('pressLeftKey');
  client.removeAllListeners('pressRightKey');
  client.removeAllListeners('pressLeftRotateKey');
  client.removeAllListeners('pressRightRotateKey');
  client.removeAllListeners('pressEscapeKey');
}
