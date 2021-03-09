import io, { Socket } from 'socket.io';

export function sendMessageToUser(client: Socket, message: string) {
  client.emit('message', message);
}

export function sendGameMapToUser(
  serverSocket: io.Server,
  userName: string,
  map: number[][]
) {
  serverSocket.to(userName).emit('gameMap', map);
}
