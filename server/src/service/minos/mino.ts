const MAP_WIDTH = 10;
const MAP_HEIGHT = 20;

class Block {
    color: string;
    xPos: number;
    yPos: number;

    constructor(color: string, xPos: number, yPos: number) {
        this.color = color;
        this.xPos = xPos || 0;
        this.yPos = yPos || 0;
    }
}

abstract class Mino {
    blocks: Array<Block>;

    constructor(color: string, xPos: number, yPos: number) {
        this.blocks = new Array(4).map((el) => new Block(color, xPos, yPos));
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
