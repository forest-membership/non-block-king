import React from 'react';
import * as S from './style';

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: IButtonProps): JSX.Element {
  return <S.Button onClick={onClick}>{text}</S.Button>;
}

export default Button;
