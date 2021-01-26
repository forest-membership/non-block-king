import React from 'react';

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: IButtonProps): JSX.Element {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
