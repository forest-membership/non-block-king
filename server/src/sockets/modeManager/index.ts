import { Socket } from 'socket.io';
import * as MessageManager from '@/sockets/messageManager';
import * as RoomManager from '../roomManager';

function onJoinPvP(this: Socket) {
  RoomManager.allocateRoom(this, 'PvP');
  MessageManager.sendMessageToUser(this, 'PvP에 입장하셨습니다. 😄');
}

function onJoinPvF(this: Socket) {
  RoomManager.allocateRoom(this, 'PvF');
  MessageManager.sendMessageToUser(this, 'PvF에 입장하셨습니다. 😄');
}

function onJoinPvE(this: Socket) {
  RoomManager.allocateRoom(this, 'PvE');
  MessageManager.sendMessageToUser(this, 'PvE에 입장하셨습니다. 😄');
}

export function attachJoinEvents(client: Socket) {
  client.on('joinPvP', onJoinPvP);
  client.on('joinPvF', onJoinPvF);
  client.on('joinPvE', onJoinPvE);
}
