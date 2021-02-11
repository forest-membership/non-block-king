import io from 'socket.io';
import keyPressEvent from '@/sockets/gameController';

const initSocket = (server: any) => {
  const socketIO: io.Server = new io.Server(server);
  socketIO.on('connect', (socket) => {
    console.log('클라이언트와 연결되었습니다.');
    keyPressEvent(socket);
  });

  return socketIO;
};

export default initSocket;
