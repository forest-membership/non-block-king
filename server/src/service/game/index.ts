import { SocketId } from 'socket.io-adapter';
import TetrisGame from '@/service/map';

type moveType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type rotateType = 'CLOCK' | 'COUNTER_CLOCK_WISE';

class GameService {
  private gameDB!: Map<SocketId, TetrisGame>;

  constructor() {
    this.gameDB = new Map<SocketId, TetrisGame>();
  }

  public initGame(socketId: SocketId) {
    this.gameDB.set(socketId, new TetrisGame());
  }

  public moveMino(socketId: SocketId, direction: moveType) {
    const tetrisInstance = this.gameDB.get(socketId);
    const success = tetrisInstance?.moveMino(direction);

    return success;
  }

  public rotateMino(socketId: SocketId, direction: rotateType) {
    const tetrisInstance = this.gameDB.get(socketId);
    const success = tetrisInstance?.rotateMino(direction);

    return success;
  }

  public settleDownMino(socketId: SocketId) {
    const tetrisInstance = this.gameDB.get(socketId);
    const success = tetrisInstance?.settleDownMino();

    return success;
  }
}

const gameService = new GameService();
export default gameService;
