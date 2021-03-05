import Mino from '@/service/minos/mino';
import Position from '@/types/position';
import STATUS from '@/service/status';

class IMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: Position = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'red';
    this.name = 'I';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][0] = STATUS.I_MINO;
    this.blockArea[1][0] = STATUS.I_MINO;
    this.blockArea[2][0] = STATUS.I_MINO;
    this.blockArea[3][0] = STATUS.I_MINO;
  }
}

export default IMino;
