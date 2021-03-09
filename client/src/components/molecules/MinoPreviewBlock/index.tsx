import React, { useCallback } from 'react';
import Canvas from '../../atoms/Canvas';
import { BLOCK_SIZE, CANVAS_ROWS, CANVAS_COLS } from './constants';
import { MinoColor } from '../../../utils/constants';
import { IMino } from '../../../@types';
import * as S from './style';

type IndexType = number;

export interface IMinoPreviewBlock {
  mino: IMino;
}

function MinoPreviewBlock({ mino }: IMinoPreviewBlock): JSX.Element {
  const drawMino = useCallback(
    (context: CanvasRenderingContext2D) => {
      const blockType = mino.blockArea[0][0];

      context.fillStyle = MinoColor[blockType];
      context.scale(BLOCK_SIZE, BLOCK_SIZE);

      mino.blockArea.forEach((row: number[], r: IndexType) => {
        row.forEach((value: number, c: IndexType) => {
          if (value > 0) {
            context.fillRect(c, r, 1, 1);
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
