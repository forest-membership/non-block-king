import Mino from '@/service/game/minos/common/mino';
import { IPosition } from '@/service/game/minos/common/types';
import STATUS from '@/service/game/constants';

class JMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: IPosition = { xPos: 0, yPos: 0 }) {
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
