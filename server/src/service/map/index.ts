import getNextMinos from '@/service/minos';
import STATUS from '@/service/status';
// import Block from '@/service/minos/block';
import Mino from '@/service/minos/mino';
import { create2DArray } from '@/utils';

const MINO_HEIGHT = 4;
const MINO_WIDTH = 4;
const TETRA = 4;

const MAP_WIDTH = 10;
const MAP_HEIGHT = 20 + MINO_HEIGHT;

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
    this.moveMino('NONE');
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
    if (!this.subMinoSet.length) {
      this.subMinoSet = getNextMinos();
    }

    this.activeMinoSet = [this.subMinoSet.pop() as Mino, ...this.activeMinoSet];
    const nextMino = this.activeMinoSet.pop() as Mino;
    console.log(
      'sub : ',
      this.subMinoSet.map((el: any) => el.name)
    );
    console.log(
      'act : ',
      this.activeMinoSet.map((el: any) => el.name)
    );

    return nextMino;
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
        const isTarget = activeMinoArea[i - pivotY][j - pivotX] === STATUS.MINO;

        if (isTarget) {
          if (MAP_HEIGHT <= i || MAP_WIDTH <= j || i < 0 || j < 0) {
            return false;
          }

          const activeBlockOfMap = this.gameMap[i][j];
          if (activeBlockOfMap === STATUS.FULL) {
            return false;
          }
        }
      }
    }
    return true;
  }

  flushActiveMino(): boolean {
    let count = 0;
    for (let i = 0; i < this.gameMap.length; i++) {
      for (let j = 0; j < this.gameMap[0].length; j++) {
        if (this.gameMap[i][j] === STATUS.MINO) {
          this.gameMap[i][j] = STATUS.VOID;
          count++;
          if (count === TETRA) {
            return true;
          }
        }
      }
    }
    return false;
  }

  moveMino(ARROW: string): boolean {
    if (!this.isMovable(ARROW)) {
      return false;
    }
    const activeMinoPivot = this.activeMino.pivot;
    const activeMinoArea = this.activeMino.area;

    this.flushActiveMino();

    const { Y_WEIGHT, X_WEIGHT } = this.getWeight(ARROW);
    activeMinoPivot.yPos += Y_WEIGHT;
    activeMinoPivot.xPos += X_WEIGHT;
    const pivotY = activeMinoPivot.yPos;
    const pivotX = activeMinoPivot.xPos;

    for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
      for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
        if (!this.gameMap[i]) {
          continue;
        }

        if (this.gameMap[i][j] === STATUS.FULL) continue;
        if (j >= MAP_WIDTH) continue;

        this.gameMap[i][j] = activeMinoArea[i - pivotY][j - pivotX];
      }
    }
    this.print();
    return true;
  }

  settleDownMino(): boolean {
    for (let i = 0; i < MAP_HEIGHT; i++) {
      for (let j = 0; j < MAP_WIDTH; j++) {
        if (this.gameMap[i][j] == STATUS.MINO) {
          this.gameMap[i][j] = STATUS.FULL;
        }
      }
    }

    this.activeMino = this.getNextMino();
    this.checkIfLineIsFullAndGiveScore();
    this.moveMino('NONE');
    return true;
  }

  pullNextLine(activeY: number) {
    for (let i = activeY; i >= 0; i--) {
      this.gameMap[i] = this.gameMap[i - 1];
    }
    this.gameMap[0] = new Array(MAP_WIDTH).fill(STATUS.VOID);
  }

  isLineFull(line: Array<STATUS>): boolean {
    console.log('line : ', line);
    return line.every((cell) => cell === STATUS.FULL);
  }

  checkIfLineIsFullAndGiveScore(activeY = MAP_HEIGHT - 1) {
    console.log('검사 해볼까!');
    for (let i = activeY; i >= 0; i--) {
      console.log('check function : ', this.gameMap[i]);
      if (this.isLineFull(this.gameMap[i])) {
        console.log(`${i}번째 줄이 채워졌네요!`);
        this.pullNextLine(i);
        this.gamePoint++;
        i--;
      }
    }
  }

  print() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    for (let i = 0; i < MAP_HEIGHT; i++) {
      for (let j = 0; j < MAP_WIDTH; j++) {
        process.stdout.write(String(this.gameMap[i][j]) + ' ');
      }
      if (i === 3) {
        process.stdout.write(' <- 이 선 포함 이 위는 보이지 않습니다.');
      }
      console.log();
    }
  }
}

export default TetrisGame;
