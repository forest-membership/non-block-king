import http from 'http';
import io, { Socket } from 'socket.io';
import * as ModeManager from '@/sockets/modeManager';

const CLIENT_ORIGIN = 'http://127.0.0.1:8000';

export default function initSocket(server: http.Server) {
  const serverSocket: io.Server = new io.Server(server, {
    cors: {
      origin: CLIENT_ORIGIN,
      methods: ['GET', 'POST'],
    },
  });

  serverSocket.on('connection', (client: Socket) => {
    console.log(`${client.id} 님이 연결되었습니다.`);

    ModeManager.attachJoinEvents(client);
  });
}
