import React, { useEffect, useRef } from 'react';

export interface ICanvasProps {
  /** 캔버스 너비 */
  width: number;
  /** 캔버스 높이 */
  height: number;
  /** 그리기 함수 */
  onPaint: (context: CanvasRenderingContext2D) => void;
}

function Canvas({ width, height, onPaint }: ICanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (!context) return;

    onPaint(context);
  }, [onPaint]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Canvas;
