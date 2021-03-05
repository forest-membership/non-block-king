import getNextMinos from '@/service/minos';
import STATUS from '@/service/status';
import Mino from '@/service/minos/mino';
import { create2DArray } from '@/utils';

const MINO_HEIGHT = 4;
const MINO_WIDTH = 4;

const MAP_WIDTH = 6;
const MAP_HEIGHT = 8 + MINO_HEIGHT;

const PREVIEW_NUM = 3;

class TetrisGame {
  private gameMap: number[][];
  public gamePoint: number;
  private subMinoSet: Mino[];
  private activeMinoSet: Mino[];
  private activeMino: Mino;

  constructor() {
    this.gameMap = create2DArray<STATUS>(MAP_HEIGHT, MAP_WIDTH, STATUS.VOID);
    this.gamePoint = 0;
    this.activeMinoSet = getNextMinos();
    this.subMinoSet = getNextMinos();
    this.activeMino = this.getNextMino();
  }

  public get offerUserMap(): number[][] {
    return this.gameMap;
  }

  previewMinoInit() {
    const newArr = [];
    for (let i = PREVIEW_NUM; i < this.activeMinoSet.length; i++) {
      newArr.push(this.activeMinoSet[i]);
    }
    return newArr;
  }

  previewMino() {
    return this.activeMinoSet[PREVIEW_NUM];
  }

  getNextMino(): Mino {
    if (!this.subMinoSet.length) this.subMinoSet = getNextMinos();

    this.activeMinoSet = [this.subMinoSet.pop() as Mino, ...this.activeMinoSet];
    return this.activeMinoSet.pop() as Mino;
  }

  getWeight(ARROW: string): any {
    switch (ARROW) {
      case 'NONE':
        return { Y_WEIGHT: 0, X_WEIGHT: 0 };
      case 'UP':
        return { Y_WEIGHT: -1, X_WEIGHT: 0 };
      case 'DOWN':
        return { Y_WEIGHT: +1, X_WEIGHT: 0 };
      case 'RIGHT':
        return { Y_WEIGHT: 0, X_WEIGHT: +1 };
      case 'LEFT':
        return { Y_WEIGHT: 0, X_WEIGHT: -1 };
    }
  }

  isMovable(ARROW: string): boolean {
    const { Y_WEIGHT, X_WEIGHT } = this.getWeight(ARROW);
    const activeMinoPivot = this.activeMino.pivot;
    const activeMinoArea = this.activeMino.area;
    const pivotY = activeMinoPivot.yPos + Y_WEIGHT;
    const pivotX = activeMinoPivot.xPos + X_WEIGHT;

    for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
      for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
        const isTarget = activeMinoArea[i - pivotY][j - pivotX];

        if (isTarget) {
          if (MAP_HEIGHT <= i || MAP_WIDTH <= j || i < 0 || j < 0) {
            return false;
          }

          const activeBlockOfMap = this.gameMap[i][j];
          if (activeBlockOfMap) {
            return false;
          }
        }
      }
    }
    return true;
  }

  isRotatable() {
    const activeMinoPivot = this.activeMino.pivot;
    const activeMinoArea = this.activeMino.area;
    const pivotY = activeMinoPivot.yPos;
    const pivotX = activeMinoPivot.xPos;

    for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
      for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
        const isTarget = activeMinoArea[i - pivotY][j - pivotX];

        if (isTarget) {
          if (MAP_HEIGHT <= i || MAP_WIDTH <= j || i < 0 || j < 0) {
            return false;
          }

          const activeBlockOfMap = this.gameMap[i][j];
          if (activeBlockOfMap) {
            return false;
          }
        }
      }
    }
    return true;
  }

  rotateMino(DIRECTION: string): boolean {
    switch (DIRECTION) {
      case 'CLOCK':
        this.activeMino.rotateRight();
        if (!this.isRotatable()) {
          this.activeMino.rotateLeft();
          return false;
        }
        break;
      case 'COUNTER_CLOCK_WISE':
        this.activeMino.rotateLeft();
        if (!this.isRotatable()) {
          this.activeMino.rotateRight();
          return false;
        }
        break;
    }
    this.print();

    return true;
  }

  moveMino(ARROW: string): boolean {
    if (!this.isMovable(ARROW)) {
      return false;
    }

    switch (ARROW) {
      case 'UP':
        this.activeMino.moveUp();
        break;
      case 'DOWN':
        this.activeMino.moveDown();
        break;
      case 'RIGHT':
        this.activeMino.moveRight();
        break;
      case 'LEFT':
        this.activeMino.moveLeft();
        break;
    }
    this.print();

    return true;
  }

  drawMinoToMap() {
    const activeMinoPivot = this.activeMino.pivot;
    const activeMinoArea = this.activeMino.area;
    const pivotY = activeMinoPivot.yPos;
    const pivotX = activeMinoPivot.xPos;

    for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
      for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
        if (!this.gameMap[i]) {
          continue;
        }

        if (this.gameMap[i][j]) continue;
        if (j >= MAP_WIDTH) continue;

        this.gameMap[i][j] = activeMinoArea[i - pivotY][j - pivotX];
      }
    }
  }

  settleDownMino(): boolean {
    this.drawMinoToMap();
    this.activeMino = this.getNextMino();
    this.checkIfLineIsFullAndGiveScore();
    return true;
  }

  pullNextLine(activeY: number) {
    for (let i = activeY; i >= 0; i--) {
      this.gameMap[i] = this.gameMap[i - 1];
    }
    this.gameMap[0] = new Array(MAP_WIDTH).fill(STATUS.VOID);
  }

  isLineFull(line: Array<STATUS>): boolean {
    return line.every((cell) => cell);
  }

  checkIfLineIsFullAndGiveScore(activeY = MAP_HEIGHT - 1) {
    console.log('검사 해볼까!');
    for (let i = activeY; i >= 0; i--) {
      if (this.isLineFull(this.gameMap[i])) {
        console.log(`${i}번째 줄이 채워졌네요!`);
        this.pullNextLine(i);
        this.gamePoint++;
        i--;
      }
    }
  }

  print() {
    const activeMinoPivot = this.activeMino.pivot;
    const activeMinoArea = this.activeMino.area;
    const pivotY = activeMinoPivot.yPos;
    const pivotX = activeMinoPivot.xPos;

    const fakeMap = create2DArray<STATUS>(MAP_HEIGHT, MAP_WIDTH, STATUS.VOID);
    for (let i = 0; i < MAP_HEIGHT; i++) {
      for (let j = 0; j < MAP_WIDTH; j++) {
        fakeMap[i][j] = this.gameMap[i][j];
      }
    }

    for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
      for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
        if (!fakeMap[i]) {
          continue;
        }

        if (fakeMap[i][j]) continue;
        if (j >= MAP_WIDTH) continue;

        fakeMap[i][j] = activeMinoArea[i - pivotY][j - pivotX];
      }
    }

    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(this.activeMino);
    for (let i = 0; i < MAP_HEIGHT; i++) {
      for (let j = 0; j < MAP_WIDTH; j++) {
        process.stdout.write(String(fakeMap[i][j]) + ' ');
      }
      if (i === 3) {
        process.stdout.write(' <- 이 선 포함 이 위는 보이지 않습니다.');
      }
      console.log();
    }
  }
}

export default TetrisGame;
