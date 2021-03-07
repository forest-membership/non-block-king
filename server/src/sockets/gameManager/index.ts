import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import roomManager from '../roomManager';

const userSet = [];
let PvPNum = 0;
let PvFNum = 0;
let PvENum = 0;

const gameManager = (serverSocket: any, socket: Socket, userNumber: number) => {
  const userName = `user:${userNumber}`;
  userSet.push(userName);

  socket.on('joinPvP', () => {
    roomManager(serverSocket, socket, userNumber, `PvP${PvPNum}`);
    sendMessageToUser(serverSocket, userName, 'PvP에 입장');
  });

  socket.on('joinPvF', () => {
    roomManager(serverSocket, socket, userNumber, `PvF${PvFNum}`);
    sendMessageToUser(serverSocket, userName, 'PvF에 입장');
  });

  socket.on('joinPvE', () => {
    roomManager(serverSocket, socket, userNumber, `PvE${PvENum}`);
    sendMessageToUser(serverSocket, userName, 'PvE에 입장');
  });
};

export default gameManager;
