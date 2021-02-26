import React from 'react';

export interface ITextProps {
  /** span 안에 나타낼 요소 */
  children: React.ReactNode;
}

function Text({ children }: ITextProps): JSX.Element {
  return <span>{children}</span>;
}

export default Text;
