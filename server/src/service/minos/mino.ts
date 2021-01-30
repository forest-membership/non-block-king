import Positon from "../../types/position";

const TETRA = 4;

class Block {
    color?: string;
    xPos: number;
    yPos: number;

    constructor(color?: string, xPos?: number, yPos?: number) {
        this.color = color;
        this.xPos = xPos || 0;
        this.yPos = yPos || 0;
    }

    setPosition({ xPos, yPos }: Positon) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

class Mino {
    blockArea: Array<Array<number>>;
    standardBlock: Block;

    constructor(color?: string) {
        this.blockArea = new Array(TETRA).fill(0).map((el) => [0, 0, 0, 0]);
        this.standardBlock = new Block(color);
    }

    setStandard(block: Block): void {
        this.standardBlock = block;
    }

    moveRight(): void {
        this.standardBlock.xPos++;
    }

    moveLeft(): void {
        this.standardBlock.xPos--;
    }

    moveDown(): void {
        this.standardBlock.yPos++;
    }

    rotateLeft(): void {
        let newArea: Array<Array<number>> = [[], [], [], []];
        for (let i = 0; i < TETRA; i++) {
            for (let j = 0; j < TETRA; j++) {
                newArea[TETRA - j - 1][i] = this.blockArea[i][j];
            }
        }
        this.blockArea = newArea;
    }

    rotateRight(): void {
        let newArea: Array<Array<number>> = [[], [], [], []];
        for (let i = 0; i < TETRA; i++) {
            for (let j = 0; j < TETRA; j++) {
                newArea[j][TETRA - i - 1] = this.blockArea[i][j];
            }
        }
        this.blockArea = newArea;
    }

    print(): void {
        for (let i = 0; i < TETRA; i++) {
            console.log(this.blockArea[i]);
        }
    }
}

export default Mino;
