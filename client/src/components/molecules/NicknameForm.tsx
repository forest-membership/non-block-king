import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function NicknameForm(): JSX.Element {
  return (
    <form>
      <Input type="text" />
      <Button text="닉네임 재생성" />
      <Button text="접속" />
    </form>
  );
}

export default NicknameForm;
