import http from 'http';
import io, { Socket } from 'socket.io';
import * as ModeManager from '@/sockets/modeManager';

export default function initSocket(server: http.Server) {
  const serverSocket: io.Server = new io.Server(server);

  serverSocket.on('connection', (client: Socket) => {
    console.log(`${client.id} 님이 연결되었습니다.`);

    ModeManager.attachJoinEvents(client);
  });
}
