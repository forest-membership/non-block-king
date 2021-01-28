import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import * as S from './style';

function NicknameForm(): JSX.Element {
  return (
    <S.Form>
      <Input type="text" placeholder="닉네임을 입력하세요" />
      <S.ButtonWrapper>
        <Button text="닉네임 재생성" />
        <Button text="접속" />
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default NicknameForm;
