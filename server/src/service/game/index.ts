import { Socket } from 'socket.io';
import { SocketId } from 'socket.io-adapter';
import * as MessageManager from '@/sockets/messageManager';
import TetrisGame from '@/service/map';

type moveType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type rotateType = 'CLOCK' | 'COUNTER_CLOCK_WISE';

interface IGameInstance {
  game: TetrisGame;
  timerId?: NodeJS.Timeout;
}

const LOOP_DELAY = 1000;

function createGameWithWatcher(socket: Socket) {
  const game = new TetrisGame();
  const gameWatcher = new Proxy(game, {
    set(target: any, prop, value) {
      if (prop === 'shouldUpdateMinoPreviews' && value === true) {
        MessageManager.sendPreviewMinosToClient(socket, target.previewMinos);
      }

      target[prop] = value;

      return true;
    },
  });
  return gameWatcher;
}

class GameService {
  private gameDB!: Map<SocketId, IGameInstance>;

  constructor() {
    this.gameDB = new Map<SocketId, IGameInstance>();
  }

  public initGame(socket: Socket) {
    this.gameDB.set(socket.id, {
      game: createGameWithWatcher(socket),
      timerId: undefined,
    });
  }

  public startGame(socketId: SocketId, gameLoop: (game: TetrisGame) => void) {
    const gameInstance = this.gameDB.get(socketId);
    if (gameInstance) {
      gameInstance.timerId = setInterval(
        () => gameLoop(gameInstance.game),
        LOOP_DELAY
      );
    }
  }

  public stopGame(socketId: SocketId) {
    const gameInstance = this.gameDB.get(socketId);
    if (gameInstance?.timerId) {
      clearInterval(gameInstance.timerId);
    }
  }

  public moveMino(socketId: SocketId, direction: moveType) {
    const tetrisInstance = this.gameDB.get(socketId);

    tetrisInstance?.game.moveMino(direction);

    return tetrisInstance?.game.composedGameMap;
  }

  public rotateMino(socketId: SocketId, direction: rotateType) {
    const tetrisInstance = this.gameDB.get(socketId);

    tetrisInstance?.game.rotateMino(direction);

    return tetrisInstance?.game.composedGameMap;
  }
}

const gameService = new GameService();
export default gameService;
