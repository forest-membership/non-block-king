import React, { useCallback } from 'react';
import Canvas from '../../atoms/Canvas';
import { BLOCK_SIZE, CANVAS_ROWS, CANVAS_COLS } from './constants';
import * as S from './style';

type IndexType = number;

interface IMino {
  blockArea: number[][];
}

export interface IMinoPreviewBlock {
  mino: IMino;
}

function MinoPreviewBlock({ mino }: IMinoPreviewBlock): JSX.Element {
  const drawMino = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.fillStyle = 'yellow';
      context.scale(BLOCK_SIZE, BLOCK_SIZE);

      mino.blockArea.forEach((row: number[], r: IndexType) => {
        row.forEach((value: number, c: IndexType) => {
          if (value > 0) {
            context.fillRect(r, c, 1, 1);
          }
        });
      });
    },
    [mino]
  );

  return (
    <S.MinoPreviewBlock>
      <Canvas
        width={BLOCK_SIZE * CANVAS_COLS}
        height={BLOCK_SIZE * CANVAS_ROWS}
        onPaint={drawMino}
      />
    </S.MinoPreviewBlock>
  );
}

export default MinoPreviewBlock;
