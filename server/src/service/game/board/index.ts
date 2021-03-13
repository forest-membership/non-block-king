import { create1DArray, create2DArray } from '@/utils';
import STATUS from '@/service/game/constants';

class GameBoard {
  protected board: STATUS[][];
  private boardHeight: number;
  private boardWidth: number;

  constructor(boardWidth: number, boardHeight: number) {
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.board = create2DArray<STATUS>(
      this.boardHeight,
      this.boardWidth,
      STATUS.VOID
    );
  }

  protected isLineFullAt(lineIdx: number) {
    return this.board[lineIdx].every((isFull: STATUS) => isFull);
  }

  protected pullPreviousLineAt(inspectStartY: number) {
    for (let y = inspectStartY; y > 0; y--) {
      this.board[y] = this.board[y - 1];
    }
    this.board[0] = create1DArray<STATUS>(this.boardWidth, STATUS.VOID);
  }
}

export default GameBoard;
