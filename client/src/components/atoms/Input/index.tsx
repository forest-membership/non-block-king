import React, { useEffect, useState } from 'react';
import * as S from './style';

export interface IInputProps {
  /** input 요소의 종류 */
  type: 'text' | 'tel' | 'email' | 'password';
  /** input 요소 기본 값 */
  defaultValue: string;
  /** input 요소 기본 안내문구 */
  placeholder?: string;
}

function Input({ type, defaultValue, placeholder }: IInputProps): JSX.Element {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <S.Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  defaultValue: '',
};

export default Input;
