import { getNextMinos } from '@/service/game/minos/helper';
import Mino from '@/service/game/minos/common/mino';
import GameBoard from '@/service/game/board';
import STATUS from '@/service/game/constants';
import {
  MINO_HEIGHT,
  MINO_WIDTH,
  MAP_HEIGHT,
  MAP_WIDTH,
  PREVIEW_COUNT,
} from './constants';
import { ArrowType, RotateType } from './types';
import { isMovable, isRotatable } from './helper';
import { copy2DArray } from '@/utils';

class TetrisGame extends GameBoard {
  private gamePoint: number;
  private subMinoSet: Mino[];
  private activeMinoSet: Mino[];
  private activeMino: Mino;
  public shouldUpdateMinoPreviews = false;

  constructor() {
    super(MAP_WIDTH, MAP_HEIGHT);
    this.gamePoint = 0;
    this.activeMinoSet = getNextMinos();
    this.subMinoSet = getNextMinos();
    this.activeMino = this.getNextActiveMino();
  }

  public get composedGameMap() {
    /** FIXME: slice 할 필요 없이 바로 조회 가능하도록 변경해주세요 */
    // return this.composeActiveMinoAndMap();

    return this.composeActiveMinoAndMap().slice(MINO_HEIGHT);
  }

  public get previewMinos() {
    return this.activeMinoSet.slice(0, PREVIEW_COUNT);
  }

  public get score() {
    return this.gamePoint;
  }

  public getNextActiveMino(): Mino {
    if (!this.subMinoSet.length) {
      this.subMinoSet = getNextMinos();
    }

    const activeMino = this.activeMinoSet.shift() as Mino;
    this.activeMinoSet.push(this.subMinoSet.shift() as Mino);

    return activeMino;
  }

  private checkLineFullAndIncreaseScore() {
    for (let y = MAP_HEIGHT - 1; y >= 0; y--) {
      if (this.isLineFullAt(y)) {
        this.pullPreviousLineAt(y);
        this.gamePoint++;
        y++;
      }
    }
  }

  private settleDownActiveMino() {
    const composedGameMap = this.composeActiveMinoAndMap();

    this.board = composedGameMap;
    this.activeMino = this.getNextActiveMino();
    this.checkLineFullAndIncreaseScore();
  }

  public moveMino(direction: ArrowType) {
    if (isMovable(direction, this.board, this.activeMino)) {
      this.activeMino.move(direction);
    } else if (direction === 'DOWN') {
      this.settleDownActiveMino();
      this.shouldUpdateMinoPreviews = true;
    }
  }

  public rotateMino(direction: RotateType) {
    /** TODO: 가능하다면 회전을 2번 할 필요가 없도록 변경해주세요 */
    switch (direction) {
      case 'CLOCK':
        this.activeMino.rotate('CLOCK');
        if (!isRotatable(this.board, this.activeMino)) {
          this.activeMino.rotate('COUNTER_CLOCK_WISE');
        }
        break;
      case 'COUNTER_CLOCK_WISE':
        this.activeMino.rotate('COUNTER_CLOCK_WISE');
        if (!isRotatable(this.board, this.activeMino)) {
          this.activeMino.rotate('CLOCK');
        }
        break;
    }
  }

  private composeActiveMinoAndMap() {
    const copiedGameMap = copy2DArray(this.board);
    const { pivot: activeMinoPivot, area: activeMinoArea } = this.activeMino;
    const { yPos: pivotY, xPos: pivotX } = activeMinoPivot;

    for (let y = pivotY; y < pivotY + MINO_HEIGHT; y++) {
      for (let x = pivotX; x < pivotX + MINO_WIDTH; x++) {
        if (activeMinoArea[y - pivotY][x - pivotX] !== STATUS.VOID) {
          copiedGameMap[y][x] = activeMinoArea[y - pivotY][x - pivotX];
        }
      }
    }

    return copiedGameMap;
  }
}

export default TetrisGame;
