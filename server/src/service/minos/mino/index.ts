import Block from '@/service/minos/block';
import STATUS from '@/service/constants';
import { create2DArray } from '@/utils/index';

const TETRA = 4;

class Mino {
  protected blockArea: number[][];
  protected pivotReferenceBlock: Block;

  constructor() {
    this.blockArea = create2DArray<STATUS>(TETRA, TETRA, STATUS.VOID);
    this.pivotReferenceBlock = new Block();
  }

  public setpivotReference(block: Block) {
    this.pivotReferenceBlock = block;
  }

  public get area(): number[][] {
    return this.blockArea;
  }

  public get pivot(): Block {
    return this.pivotReferenceBlock;
  }

  public move(direction: 'UP' | 'DOWN' | 'RIGHT' | 'LEFT' | 'NONE') {
    switch (direction) {
      case 'UP':
        this.pivotReferenceBlock.yPos--;
        break;
      case 'DOWN':
        this.pivotReferenceBlock.yPos++;
        break;
      case 'RIGHT':
        this.pivotReferenceBlock.xPos++;
        break;
      case 'LEFT':
        this.pivotReferenceBlock.xPos--;
        break;
      default:
        break;
    }
  }

  public rotate(direction: 'CLOCK' | 'COUNTER_CLOCK_WISE') {
    /** TODO: 경수님한테 회전 동작 제대로 되는지 물어보기 */
    if (direction === 'CLOCK') {
      const newArea: number[][] = [[], [], [], []];
      for (let i = 0; i < TETRA; i++) {
        for (let j = 0; j < TETRA; j++) {
          newArea[j][TETRA - i - 1] = this.blockArea[i][j];
        }
      }
      this.blockArea = newArea;
    } else {
      const newArea: number[][] = [[], [], [], []];
      for (let i = 0; i < TETRA; i++) {
        for (let j = 0; j < TETRA; j++) {
          newArea[TETRA - j - 1][i] = this.blockArea[i][j];
        }
      }
      this.blockArea = newArea;
    }
  }
}

export default Mino;
