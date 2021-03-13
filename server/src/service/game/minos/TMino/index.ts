import Mino from '@/service/game/minos/common/mino';
import { IPosition } from '@/service/game/minos/common/types';
import STATUS from '@/service/game/constants';

class TMino extends Mino {
  color: string;
  name: string;

  constructor(initValue: IPosition = { xPos: 0, yPos: 0 }) {
    super();
    this.color = 'indigo';
    this.name = 'T';
    this.pivotReferenceBlock.xPos = initValue.xPos;
    this.pivotReferenceBlock.yPos = initValue.yPos;
    this.init();
  }

  init() {
    this.blockArea[0][0] = STATUS.T_MINO;
    this.blockArea[0][1] = STATUS.T_MINO;
    this.blockArea[0][2] = STATUS.T_MINO;
    this.blockArea[1][1] = STATUS.T_MINO;
  }
}

export default TMino;
