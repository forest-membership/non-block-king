import Positon from "../../types/position";

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

abstract class Mino {
    blocks: Array<Block>;
    standardBlock: Block;

    constructor(color?: string) {
        this.blocks = new Array(TETRA).map((el) => new Block(color));
        this.standardBlock = this.blocks[0];
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

    rotateLeft(): void {}
    rotateRight(): void {}
}

export default Mino;
