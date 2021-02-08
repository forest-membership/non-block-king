import Mino from "@/service/minos/mino";
import Position from "@/types/position";
import STATUS from "@/service/status";

class SMino extends Mino {
    constructor(color: string = "white", initValue: Position = { xPos: 0, yPos: 0 }) {
        super(color);
        this.pivotReferenceBlock.xPos = initValue.xPos;
        this.pivotReferenceBlock.yPos = initValue.yPos;
        this.init();
    }

    init() {
        this.blockArea[0][1] = STATUS.MINO;
        this.blockArea[0][2] = STATUS.MINO;
        this.blockArea[1][1] = STATUS.MINO;
        this.blockArea[1][0] = STATUS.MINO;
    }
}

export default SMino;
