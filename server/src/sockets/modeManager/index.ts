import { Socket } from 'socket.io';
import * as MessageManager from '@/sockets/messageManager';
import * as RoomManager from '../roomManager';

function onJoinPvP(this: Socket) {
  RoomManager.allocateRoom(this, 'PvP');
  MessageManager.sendMessageToClient(
    this,
    'join:success',
    'PvP에 입장하셨습니다. 😄'
  );
}

function onJoinPvF(this: Socket) {
  RoomManager.allocateRoom(this, 'PvF');
  MessageManager.sendMessageToClient(
    this,
    'join:success',
    'PvF에 입장하셨습니다. 😄'
  );
}

function onJoinPvE(this: Socket) {
  RoomManager.allocateRoom(this, 'PvE');
  MessageManager.sendMessageToClient(
    this,
    'join:success',
    'PvE에 입장하셨습니다. 😄'
  );
}

export function attachJoinEvents(client: Socket) {
  client.on('join:pvp', onJoinPvP);
  client.on('join:pvf', onJoinPvF);
  client.on('join:pve', onJoinPvE);
}
