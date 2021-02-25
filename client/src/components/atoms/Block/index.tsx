import React from 'react';

export interface IBlockProps {
  /** div 안에 나타낼 요소 */
  children: React.ReactNode;
  /** 컴포넌트 스타일 상속용 프로퍼티 */
  className?: string;
}

function Block({ children, className }: IBlockProps): JSX.Element {
  return <div className={className}>{children}</div>;
}

export default Block;
