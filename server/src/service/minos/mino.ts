import Positon from "../../types/position";
import Direction from "../../types/direction";

const MAP_WIDTH = 10;
const MAP_HEIGHT = 20;
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
    blocks: Array<Block>;
    blockArea: Array<Array<number>>;
    standardBlock: Block;
    direction: number;

    constructor(color?: string) {
        this.blocks = new Array(TETRA).fill(0).map((el) => new Block(color));
        // this.blockArea = new Array(TETRA).fill([]).map((el) => new Array<number | undefined>(TETRA).fill(0));
        this.blockArea = new Array(TETRA).fill(0).map((el) => [0, 0, 0, 0]);
        this.standardBlock = this.blocks[0];
        this.direction = Direction.up;
    }

    setStandard(block: Block): void {
        this.standardBlock = block;
    }

    moveRight(): void {
        this.blocks.forEach((block) => {
            if (block.xPos < MAP_WIDTH) {
                block.xPos++;
            }
        });
    }

    moveLeft(): void {
        this.blocks.forEach((block) => {
            if (block.xPos < 0) {
                block.xPos--;
            }
        });
    }

    moveDown(): void {
        this.blocks.forEach((block) => {
            if (block.xPos < MAP_HEIGHT) {
                block.yPos++;
            }
        });
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

    print() {
        for (let i = 0; i < TETRA; i++) {
            console.log(this.blockArea[i]);
        }
    }
}

export default Mino;
