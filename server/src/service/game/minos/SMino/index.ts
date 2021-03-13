import Mino from '@/service/game/minos/common/mino';
import Position from '@/types/position';
import STATUS from '@/service/game/constants';

class SMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: Position = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'blue';
    this.name = 'S';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][1] = STATUS.S_MINO;
    this.blockArea[0][2] = STATUS.S_MINO;
    this.blockArea[1][1] = STATUS.S_MINO;
    this.blockArea[1][0] = STATUS.S_MINO;
  }
}

export default SMino;
