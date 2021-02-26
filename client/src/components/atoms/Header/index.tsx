import React from 'react';

export interface IHeaderProps {
  /** 헤더 레벨 (h1, h2 ...) */
  level: number;
  /** 자식 요소 */
  children: React.ReactNode;
}

function Header({ level, children, ...props }: IHeaderProps): JSX.Element {
  return React.createElement(`h${level}`, props, children);
}

export default Header;
