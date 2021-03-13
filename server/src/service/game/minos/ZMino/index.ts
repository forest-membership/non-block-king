import Mino from '@/service/game/minos/common/mino';
import Position from '@/types/position';
import STATUS from '@/service/game/constants';

class ZMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: Position = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'purple';
    this.name = 'Z';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][0] = STATUS.Z_MINO;
    this.blockArea[0][1] = STATUS.Z_MINO;
    this.blockArea[1][1] = STATUS.Z_MINO;
    this.blockArea[1][2] = STATUS.Z_MINO;
  }
}

export default ZMino;
