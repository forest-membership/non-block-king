import http from 'http';
import io, { Socket } from 'socket.io';
import gameManager from '@/sockets/gameManager';

// TODO: 클라이언트에서 닉네임 보내면 해싱해서 사용하기
let userNumber = 0;

const initSocket = (server: http.Server) => {
  const serverSocket: io.Server = new io.Server(server);

  serverSocket.on('connection', (client: Socket) => {
    console.log(`${userNumber} 님이 연결되었습니다.`);

    gameManager(client, userNumber);

    userNumber++; // 임시코드
  });
};

export default initSocket;
