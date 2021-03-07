import Mino from '@/service/minos/mino';

// TODO : 여기의 로직들은 나중에 user에게만 줄 것이 아니라 방의 구성원 모두에게 주도록 해야 한다.
export const sendMessageToUser = (
  serverSocket: any,
  userName: string,
  message: string
) => serverSocket.to(userName).emit('message', message);

export const sendGameMapToUser = (
  serverSocket: any,
  userName: string,
  map: number[][]
) => serverSocket.to(userName).emit('gameMap', map);

export const sendMinoSetToUser = (
  serverSocket: any,
  userName: string,
  minos: Mino[]
) => serverSocket.to(userName).emit('', minos);

export const sendMinoToUser = (
  serverSocket: any,
  userName: string,
  mino: Mino
) => serverSocket.to(userName).emit('', mino);
