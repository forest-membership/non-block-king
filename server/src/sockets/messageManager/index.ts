import { Socket } from 'socket.io';
import Mino from '@/service/minos/mino';

export function sendMessageToClient(
  client: Socket,
  messageType: string,
  entity: string
) {
  client.emit(messageType, entity);
}

export function sendGameMapToClient(client: Socket, gameMap: number[][]) {
  client.emit('game:tick-grid', gameMap);
}

export function sendPreviewMinosToClient(client: Socket, previewMinos: Mino[]) {
  client.emit('game:tick-previews', previewMinos);
}
