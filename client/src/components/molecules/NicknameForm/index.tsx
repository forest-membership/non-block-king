import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import * as S from './style';

function NicknameForm(): JSX.Element {
  return (
    <S.Form>
      <Input type="text" placeholder="닉네임을 입력하세요" />
      <S.ButtonWrapper>
        <Button>닉네임 재생성</Button>
        <Button>접속</Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default NicknameForm;
