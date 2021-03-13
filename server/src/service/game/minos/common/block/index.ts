import Position from '@/types/position';

class Block {
  xPos: number;
  yPos: number;

  constructor(xPos?: number, yPos?: number) {
    this.xPos = xPos || 0;
    this.yPos = yPos || 0;
  }

  setPosition({ xPos, yPos }: Position) {
    this.xPos = xPos;
    this.yPos = yPos;
  }
}

export default Block;
