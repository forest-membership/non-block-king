import Mino from '@/service/minos/mino';
import Position from '@/types/position';
import STATUS from '@/service/status';

class LMino extends Mino {
  name: string;

  constructor(
    color: string = 'white',
    initValue: Position = { xPos: 0, yPos: 0 }
  ) {
    super(color);
    this.name = 'L';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][0] = STATUS.MINO;
    this.blockArea[1][0] = STATUS.MINO;
    this.blockArea[2][0] = STATUS.MINO;
    this.blockArea[2][1] = STATUS.MINO;
  }
}

export default LMino;
