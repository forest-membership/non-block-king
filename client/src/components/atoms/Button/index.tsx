import React from 'react';
import * as S from './style';

export interface IButtonProps {
  /** 버튼 고유 아이디 */
  id?: string;
  /** 버튼 종류 */
  variant: 'contained' | 'outlined';
  /** 버튼 색상 */
  color: string;
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 시 실행할 함수 */
  onClick?: () => void;
}

function Button({
  id,
  variant,
  color,
  children,
  onClick,
}: IButtonProps): JSX.Element {
  return (
    <S.Button id={id} variant={variant} color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
}

Button.defaultProps = {
  variant: 'contained',
  color: 'gray',
};

export default Button;
