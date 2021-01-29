import Mino from "./mino";
import Positon from "../../types/position";

class LMino extends Mino {
    constructor(color: string = "white", initValue: Positon = { xPos: 0, yPos: 0 }) {
        super(color);
        this.pivotReferenceBlock.xPos = initValue.xPos;
        this.pivotReferenceBlock.yPos = initValue.yPos;
        this.init();
    }

    init() {
        this.blockArea[0][0] = 1;
        this.blockArea[1][0] = 1;
        this.blockArea[2][0] = 1;
        this.blockArea[2][1] = 1;
    }
}

export default LMino;
