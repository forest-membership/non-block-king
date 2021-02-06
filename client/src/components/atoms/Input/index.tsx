import React, { useState } from 'react';
import * as S from './style';

interface IInputProps {
  /** input 요소의 종류 */
  type: string;
  /** input 요소 기본 안내문구 */
  placeholder?: string;
}

function Input({ type, placeholder }: IInputProps): JSX.Element {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <S.Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
}

export default Input;
