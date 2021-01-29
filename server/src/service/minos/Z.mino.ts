import Mino from "@/service/minos/mino";
import Position from "@/types/position";

class ZMino extends Mino {
    constructor(color: string = "white", initValue: Position = { xPos: 0, yPos: 0 }) {
        super(color);
        this.pivotReferenceBlock.xPos = initValue.xPos;
        this.pivotReferenceBlock.yPos = initValue.yPos;
        this.init();
    }

    init() {
        this.blockArea[0][0] = 1;
        this.blockArea[0][1] = 1;
        this.blockArea[1][1] = 1;
        this.blockArea[1][2] = 1;
    }
}

export default ZMino;
