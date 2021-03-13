import getNextMinos from '@/service/game/minos';
import Mino from '@/service/game/minos/common/mino';
import { create1DArray, create2DArray, copy2DArray } from '@/utils';
import STATUS from '@/service/game/constants';
import { MINO_HEIGHT, MINO_WIDTH, MAP_HEIGHT, MAP_WIDTH } from './constants';
import { ArrowType, RotateType } from './types';
import { isMovable, isRotatable } from './helper';

class TetrisGame {
  private gameMap: number[][];
  private gamePoint: number;
  private subMinoSet: Mino[];
  private activeMinoSet: Mino[];
  private activeMino: Mino;
  public shouldUpdateMinoPreviews = false;

  constructor() {
    this.gameMap = create2DArray<STATUS>(MAP_HEIGHT, MAP_WIDTH, STATUS.VOID);
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
    return this.activeMinoSet.slice(3);
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

  private isLineFull(line: STATUS[]) {
    return line.every((isFull: STATUS) => isFull);
  }

  private pullPreviousLine(inspectStartY: number) {
    for (let y = inspectStartY; y >= 0; y--) {
      this.gameMap[y] = this.gameMap[y - 1];
    }
    this.gameMap[0] = create1DArray<STATUS>(MAP_WIDTH, STATUS.VOID);
  }

  private checkLineFullAndIncreaseScore() {
    for (let y = MAP_HEIGHT - 1; y >= 0; y--) {
      if (this.isLineFull(this.gameMap[y])) {
        this.pullPreviousLine(y);
        this.gamePoint++;
        y++;
      }
    }
  }

  private settleDownActiveMino() {
    const composedGameMap = this.composeActiveMinoAndMap();

    this.gameMap = composedGameMap;
    this.activeMino = this.getNextActiveMino();
    this.checkLineFullAndIncreaseScore();
  }

  public moveMino(direction: ArrowType) {
    if (isMovable(direction, this.gameMap, this.activeMino)) {
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
        if (!isRotatable(this.gameMap, this.activeMino)) {
          this.activeMino.rotate('COUNTER_CLOCK_WISE');
        }
        break;
      case 'COUNTER_CLOCK_WISE':
        this.activeMino.rotate('COUNTER_CLOCK_WISE');
        if (!isRotatable(this.gameMap, this.activeMino)) {
          this.activeMino.rotate('CLOCK');
        }
        break;
    }
  }

  private composeActiveMinoAndMap() {
    const copiedGameMap = copy2DArray(this.gameMap);
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
