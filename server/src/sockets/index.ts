import io from 'socket.io';
// import keyPressEvent from '@/sockets/gameController';
import roomManager from '@/sockets/roomManager';

let userNumber = 0;

const initSocket = (server: any) => {
  const serverSocket: io.Server = new io.Server(server);
  serverSocket.on('connect', (socket) => {
    console.log(`클라이언트 user${userNumber} 님이 연결되었습니다.`);

    socket.join(`user:${userNumber}`);
    // keyPressEvent(serverSocket, socket, userNumber);
    roomManager(serverSocket, socket, userNumber);

    socket.on('message', (data: string) => {
      serverSocket.emit('message', data);
    });

    userNumber++;
  });

  return serverSocket;
};

export default initSocket;
