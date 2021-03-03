import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import roomManager from '../roomManager';

const gameManager = (serverSocket: any, socket: Socket, userNumber: number) => {
  const userName = `user:${userNumber}`;

  socket.on('joinPvP', () => {
    roomManager(serverSocket, socket, userNumber, 'PvP');
    sendMessageToUser(serverSocket, userName, 'PvP에 입장');
  });

  socket.on('joinPvF', () => {
    roomManager(serverSocket, socket, userNumber, 'PvF');
    sendMessageToUser(serverSocket, userName, 'PvF에 입장');
  });

  socket.on('joinPvE', () => {
    roomManager(serverSocket, socket, userNumber, 'PvE');
    sendMessageToUser(serverSocket, userName, 'PvE에 입장');
  });
};

export default gameManager;
