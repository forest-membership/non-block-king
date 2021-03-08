import { Socket } from 'socket.io';
import { sendMessageToUser } from '@/sockets/messageManager';
import roomManager from '../roomManager';

// TODO: GameManager 가 유저가 입장 요청을 보냈을 때 적절한 방을 찾아서 매칭해주도록 한다.
const gameManager = (socket: Socket, userNumber: number) => {
  const userName = `user:${userNumber}`;
  console.log(userName);

  socket.on('joinPvP', () => {
    roomManager(socket, userNumber, 'PvP');
    sendMessageToUser(socket, 'PvP에 입장');
  });

  socket.on('joinPvF', () => {
    roomManager(socket, userNumber, 'PvF');
    sendMessageToUser(socket, 'PvF에 입장');
  });

  socket.on('joinPvE', () => {
    roomManager(socket, userNumber, 'PvE');
    sendMessageToUser(socket, 'PvE에 입장');
  });
};

export default gameManager;
