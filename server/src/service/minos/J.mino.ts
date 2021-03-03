import Mino from '@/service/minos/mino';
import Position from '@/types/position';
import STATUS from '@/service/status';

class JMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: Position = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'orange';
    this.name = 'J';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][1] = STATUS.J_MINO;
    this.blockArea[1][1] = STATUS.J_MINO;
    this.blockArea[2][1] = STATUS.J_MINO;
    this.blockArea[2][0] = STATUS.J_MINO;
  }
}

export default JMino;
