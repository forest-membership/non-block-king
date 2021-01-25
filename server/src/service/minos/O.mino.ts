import Mino from "./mino";
import Positon from "../../types/position";

// 블럭의 스타트 지점은 가장 아래인 블럭 중 가장 왼쪽인 것을 지칭한다.
class OMino extends Mino {
    constructor(color: string, initValue: Positon) {
        super(color);
        this.standardBlock.xPos = initValue.xPos;
        this.standardBlock.yPos = initValue.yPos;
    }
}

export default OMino;
