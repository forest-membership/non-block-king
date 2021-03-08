import io, { Socket } from 'socket.io';

export const sendMessageToUser = (socket: Socket, message: string) =>
  socket.emit('message', message);

export const sendGameMapToUser = (
  serverSocket: io.Server,
  userName: string,
  map: number[][]
) => serverSocket.to(userName).emit('gameMap', map);
