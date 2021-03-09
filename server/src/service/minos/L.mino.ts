import Mino from '@/service/minos/mino';
import Position from '@/types/position';
import STATUS from '@/service/constants';

class LMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: Position = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'yellow';
    this.name = 'L';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][0] = STATUS.L_MINO;
    this.blockArea[1][0] = STATUS.L_MINO;
    this.blockArea[2][0] = STATUS.L_MINO;
    this.blockArea[2][1] = STATUS.L_MINO;
  }
}

export default LMino;
