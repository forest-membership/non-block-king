import Mino from "./mino";
import Positon from "../../types/position";

class SMino extends Mino {
    constructor(color: string = "white", initValue: Positon = { xPos: 0, yPos: 0 }) {
        super(color);
        this.standardBlock.xPos = initValue.xPos;
        this.standardBlock.yPos = initValue.yPos;
        this.init();
    }

    init() {
        this.blockArea[0][1] = 1;
        this.blockArea[0][2] = 1;
        this.blockArea[1][1] = 1;
        this.blockArea[1][0] = 1;
    }
}

export default SMino;
