import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import roomManager from '../roomManager';

const userSet: any = [];
let PvPNum = 0;
let PvFNum = 0;
let PvENum = 0;

const userCounter = (userName: string) => {
  if (!userSet.includes(userName)) {
    return userSet.push(userName);
  }
};

const gameManager = (serverSocket: any, socket: Socket, userNumber: number) => {
  const userName = `user:${userNumber}`;
  userCounter(userName);
  console.log(`userSet : `, userSet);

  socket.on('joinPvP', () => {
    roomManager(serverSocket, socket, userNumber, `PvP${PvPNum}`);
    sendMessageToUser(serverSocket, userName, 'PvP에 입장');
    socket.removeAllListeners('joinPvF');
    socket.removeAllListeners('joinPvE');
  });

  socket.on('joinPvF', () => {
    roomManager(serverSocket, socket, userNumber, `PvF${PvFNum}`);
    sendMessageToUser(serverSocket, userName, 'PvF에 입장');
    socket.removeAllListeners('joinPvP');
    socket.removeAllListeners('joinPvE');
  });

  socket.on('joinPvE', () => {
    roomManager(serverSocket, socket, userNumber, `PvE${PvENum}`);
    sendMessageToUser(serverSocket, userName, 'PvE에 입장');
    socket.removeAllListeners('joinPvA');
    socket.removeAllListeners('joinPvF');
  });
};

export default gameManager;
