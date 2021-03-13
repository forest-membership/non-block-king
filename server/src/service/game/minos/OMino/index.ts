import Mino from '@/service/game/minos/common/mino';
import Position from '@/types/position';
import STATUS from '@/service/game/constants';

class OMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: Position = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'green';
    this.name = 'O';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][1] = STATUS.O_MINO;
    this.blockArea[1][1] = STATUS.O_MINO;
    this.blockArea[0][0] = STATUS.O_MINO;
    this.blockArea[1][0] = STATUS.O_MINO;
  }
}

export default OMino;
