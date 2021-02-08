import STATUS from "@/service/status";
import Block from "@/service/minos/block";

const TETRA = 4;

class Mino {
    protected blockArea: number[][];
    protected pivotReferenceBlock: Block;

    constructor(color?: string) {
        this.blockArea = new Array(TETRA).fill(0).map((el) => [STATUS.VOID, STATUS.VOID, STATUS.VOID, STATUS.VOID]);
        this.pivotReferenceBlock = new Block(color);
    }

    setpivotReference(block: Block) {
        this.pivotReferenceBlock = block;
    }

    public get area(): number[][] {
        return this.blockArea;
    }

    public get pivot(): Block {
        return this.pivotReferenceBlock;
    }

    moveRight() {
        this.pivotReferenceBlock.xPos++;
    }

    moveLeft() {
        this.pivotReferenceBlock.xPos--;
    }

    moveDown() {
        this.pivotReferenceBlock.yPos++;
    }

    rotateLeft() {
        let newArea: number[][] = [[], [], [], []];
        for (let i = 0; i < TETRA; i++) {
            for (let j = 0; j < TETRA; j++) {
                newArea[TETRA - j - 1][i] = this.blockArea[i][j];
            }
        }
        this.blockArea = newArea;
        return this;
    }

    rotateRight() {
        let newArea: number[][] = [[], [], [], []];
        for (let i = 0; i < TETRA; i++) {
            for (let j = 0; j < TETRA; j++) {
                newArea[j][TETRA - i - 1] = this.blockArea[i][j];
            }
        }
        this.blockArea = newArea;
        return this;
    }

    print() {
        for (let i = 0; i < TETRA; i++) {
            console.log(this.blockArea[i]);
        }
    }
}

export default Mino;
