import Position from "@/types/position";

class Block {
    color?: string;
    xPos: number;
    yPos: number;

    constructor(color?: string, xPos?: number, yPos?: number) {
        this.color = color;
        this.xPos = xPos || 0;
        this.yPos = yPos || 0;
    }

    setPosition({ xPos, yPos }: Position) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

export default Block;
