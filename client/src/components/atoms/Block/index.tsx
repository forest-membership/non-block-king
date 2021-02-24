import React from 'react';

export interface IBlockProps {
  /** div 안에 나타낼 요소 */
  children: React.ReactNode;
}

function Block({ children }: IBlockProps): JSX.Element {
  return <div>{children}</div>;
}

export default Block;
