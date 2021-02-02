import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import * as S from './style';

interface INicknameForm {
  /** 폼 제출 시 실핼할 콜백 함수 */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

function NicknameForm({ onSubmit }: INicknameForm): JSX.Element {
  return (
    <S.Form onSubmit={onSubmit}>
      <Input type="text" placeholder="닉네임을 입력하세요" />
      <S.ButtonWrapper>
        <Button>닉네임 재생성</Button>
        <Button>접속</Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default NicknameForm;
