import Block from '@/service/minos/block';
import STATUS from '@/service/status';

const TETRA = 4;

class Mino {
  protected blockArea: number[][];
  protected pivotReferenceBlock: Block;

  constructor() {
    this.blockArea = this.initBlockArea();
    this.pivotReferenceBlock = new Block();
  }

  setpivotReference(block: Block) {
    this.pivotReferenceBlock = block;
  }

  public get area(): number[][] {
    return this.blockArea;
  }

  public get pivot(): Block {
    return this.pivotReferenceBlock;
  }

  private initBlockArea() {
    return new Array(TETRA)
      .fill(0)
      .map((el) => [STATUS.VOID, STATUS.VOID, STATUS.VOID, STATUS.VOID]);
  }

  moveRight() {
    if (!isNaN(this.pivotReferenceBlock.xPos)) {
      this.pivotReferenceBlock.xPos++;
    }
  }

  moveLeft() {
    if (!isNaN(this.pivotReferenceBlock.xPos)) {
      this.pivotReferenceBlock.xPos--;
    }
  }

  moveDown() {
    if (!isNaN(this.pivotReferenceBlock.yPos)) {
      this.pivotReferenceBlock.yPos++;
    }
  }
  moveUp() {
    if (!isNaN(this.pivotReferenceBlock.xPos)) {
      this.pivotReferenceBlock.yPos--;
    }
  }

  rotateLeft() {
    let newArea: number[][] = [[], [], [], []];
    for (let i = 0; i < TETRA; i++) {
      for (let j = 0; j < TETRA; j++) {
        newArea[TETRA - j - 1][i] = this.blockArea[i][j];
      }
    }
    this.blockArea = newArea;
  }

  rotateRight() {
    let newArea: number[][] = [[], [], [], []];
    for (let i = 0; i < TETRA; i++) {
      for (let j = 0; j < TETRA; j++) {
        newArea[j][TETRA - i - 1] = this.blockArea[i][j];
      }
    }
    this.blockArea = newArea;
  }
}

export default Mino;
