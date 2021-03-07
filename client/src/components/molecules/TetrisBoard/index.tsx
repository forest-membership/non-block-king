import React, { useCallback } from 'react';
import Canvas from '../../atoms/Canvas';
import { BLOCK_SIZE, CANVAS_ROWS, CANVAS_COLS } from './constants';
import { MinoColor } from '../../../utils/constants';
import * as S from './style';

type IndexType = number;

export interface ITetrisBoardProps {
  grid: number[][];
}

function TetrisBoard({ grid }: ITetrisBoardProps): JSX.Element {
  const drawTetrisBoard = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.scale(BLOCK_SIZE, BLOCK_SIZE);

      grid.forEach((row: number[], r: IndexType) => {
        row.forEach((value: number, c: IndexType) => {
          if (value > 0) {
            const color = MinoColor[value];
            context.fillStyle = color;
            context.fillRect(c, r, 1, 1);
          }
        });
      });
    },
    [grid]
  );

  return (
    <S.TetrisBoard>
      <Canvas
        width={BLOCK_SIZE * CANVAS_COLS}
        height={BLOCK_SIZE * CANVAS_ROWS}
        onPaint={drawTetrisBoard}
      />
    </S.TetrisBoard>
  );
}

export default TetrisBoard;
