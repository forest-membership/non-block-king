import Mino from '@/service/minos/mino';
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

// TODO : 게임 시작 시 preview Mino를 보내기 위한 함수, 아래 함수 묶음으로 대체할 수 있을 법하다.
export function sendMinoSetToUser(
  serverSocket: any,
  userName: string,
  minos: Mino[]
) {
  serverSocket.to(userName).emit('', minos);
}

// TODO : 매번 다음 preview Mino를 보내주기 위한 함수
export function sendMinoToUser(
  serverSocket: any,
  userName: string,
  mino: Mino
) {
  serverSocket.to(userName).emit('', mino);
}
