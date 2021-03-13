import { Socket } from 'socket.io';
import * as MessageManager from '@/sockets/messageManager';
import GameService from '@/service/game';
import TetrisGame from '@/service/game/simulator';
import { KeyMap } from '@/types/key';

function gameLoopFactory(socket: Socket) {
  return function gameLoop(game: TetrisGame) {
    game.moveMino('DOWN');
    MessageManager.sendGameMapToClient(socket, game.composedGameMap);
  };
}

export function initGameMap(socket: Socket) {
  GameService.initGame(socket);
}

export function startGame(socket: Socket) {
  GameService.startGame(socket.id, gameLoopFactory(socket));
  MessageManager.sendMessageToClient(socket, 'game:start', '🔥 게임시작! 🔥');
}

export function moveMino(socket: Socket, key: keyof typeof KeyMap) {
  if (key === 'CLOCK' || key === 'COUNTER_CLOCK_WISE') return;

  const gameMap = GameService.moveMino(socket.id, key);
  if (gameMap === undefined) {
    console.error('예기치 못한 에러');
    return;
  }

  MessageManager.sendGameMapToClient(socket, gameMap);
}

export function rotateMino(socket: Socket, key: keyof typeof KeyMap) {
  if (key !== 'CLOCK' && key !== 'COUNTER_CLOCK_WISE') return;

  const gameMap = GameService.rotateMino(socket.id, key);
  if (gameMap === undefined) {
    console.error('예기치 못한 에러');
    return;
  }

  MessageManager.sendGameMapToClient(socket, gameMap);
}
