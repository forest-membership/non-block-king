import io, { Socket } from 'socket.io';
// import keyPressEvent from '@/sockets/gameController';
import gameManager from '@/sockets/gameManager';

// TODO: 클라이언트에서 닉네임 보내면 해싱해서 사용하기
let userNumber = 0;

const initSocket = (server: any) => {
  const serverSocket: io.Server = new io.Server(server);
  serverSocket.on('connect', (socket: Socket) => {
    console.log(`클라이언트 user${userNumber} 님이 연결되었습니다.`);
    console.log(`클라이언트의 소켓 ID는 ${socket.id} 입니다.`);

    socket.join(`user:${userNumber}`);

    gameManager(serverSocket, socket, userNumber);

    socket.on('message', (data: string) => {
      console.log('message가 들어왔습니다. : ', data);

      // 메시지를 돌려준다.
      serverSocket.emit('message', data);
    });

    userNumber++;
  });

  return serverSocket;
};

export default initSocket;
