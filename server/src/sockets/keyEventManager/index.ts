import { Socket } from 'socket.io';
import * as GameManager from '@/sockets/gameManager';

function onKeyPressUp(this: Socket) {
  GameManager.moveMino(this, 'UP');
}

function onKeyPressDown(this: Socket) {
  GameManager.moveMino(this, 'DOWN');
}

function onKeyPressLeft(this: Socket) {
  GameManager.moveMino(this, 'LEFT');
}

function onKeyPressRight(this: Socket) {
  GameManager.moveMino(this, 'RIGHT');
}

function onKeyPressLeftRotate(this: Socket) {
  GameManager.rotateMino(this, 'COUNTER_CLOCK_WISE');
}

function onKeyPressRightRotate(this: Socket) {
  GameManager.rotateMino(this, 'CLOCK');
}

export function attachKeyPressEvents(client: Socket) {
  client.on('pressUpKey', onKeyPressUp);
  client.on('pressDownKey', onKeyPressDown);
  client.on('pressLeftKey', onKeyPressLeft);
  client.on('pressRightKey', onKeyPressRight);
  client.on('pressLeftRotateKey', onKeyPressLeftRotate);
  client.on('pressRightRotateKey', onKeyPressRightRotate);
}

export function detachKeyPressEvents(client: Socket) {
  client.removeAllListeners('pressUpKey');
  client.removeAllListeners('pressDownKey');
  client.removeAllListeners('pressLeftKey');
  client.removeAllListeners('pressRightKey');
  client.removeAllListeners('pressLeftRotateKey');
  client.removeAllListeners('pressRightRotateKey');
}
