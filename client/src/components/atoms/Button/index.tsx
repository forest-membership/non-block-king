import React from 'react';
import * as S from './style';

export interface IButtonProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 시 실행할 함수 */
  onClick?: () => void;
}

function Button({ children, onClick }: IButtonProps): JSX.Element {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

export default Button;
