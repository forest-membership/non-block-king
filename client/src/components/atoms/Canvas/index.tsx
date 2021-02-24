import React from 'react';
import * as S from './style';

export interface ICanvasProps {
  /** 캔버스 너비 */
  width: number;
  /** 캔버스 높이 */
  height: number;
}

function Canvas({ width, height }: ICanvasProps): JSX.Element {
  return <S.Canvas width={width} height={height} />;
}

export default Canvas;
