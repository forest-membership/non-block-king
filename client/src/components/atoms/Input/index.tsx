import React from 'react';

interface IInputProps {
  type: string;
  placeholder?: string;
}

function Input({ type, placeholder }: IInputProps): JSX.Element {
  return <input type={type} placeholder={placeholder} />;
}

export default Input;
