import { ArrowType } from './types';
import Mino from '@/service/game/minos/common/mino';
import {
  MINO_HEIGHT,
  MINO_WIDTH,
  MAP_HEIGHT,
  MAP_WIDTH,
  OFFSET,
} from './constants';

export function isMovable(
  direction: ArrowType,
  gameMap: number[][],
  targetMino: Mino
) {
  const { dy, dx } = OFFSET[direction];
  const { pivot: activeMinoPivot, area: activeMinoArea } = targetMino;
  const pivotY = activeMinoPivot.yPos + dy;
  const pivotX = activeMinoPivot.xPos + dx;

  for (let y = pivotY; y < pivotY + MINO_HEIGHT; y++) {
    for (let x = pivotX; x < pivotX + MINO_WIDTH; x++) {
      const isTarget = activeMinoArea[y - pivotY][x - pivotX];

      if (isTarget) {
        if (MAP_HEIGHT <= y || MAP_WIDTH <= x || y < 0 || x < 0) {
          return false;
        }

        const activeBlockOfMap = gameMap[y][x];
        if (activeBlockOfMap) {
          return false;
        }
      }
    }
  }

  return true;
}

export function isRotatable(gameMap: number[][], targetMino: Mino) {
  return isMovable('NONE', gameMap, targetMino);
}
