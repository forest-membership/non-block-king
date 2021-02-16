import React from 'react';
import Button from '../../atoms/Button';
import * as S from './style';

export interface INicknameFormProps {
  /** 닉네임 값 */
  nickname: string;
  /** 폼 제출 시 실핼할 콜백 함수 */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  /** 닉네임 생성 요청 콜백 함수 */
  onGenerateNickname: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function NicknameForm({
  nickname,
  onSubmit,
  onGenerateNickname,
}: INicknameFormProps): JSX.Element {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.InputWrapper>
        <S.NicknameInput
          type="text"
          defaultValue={nickname}
          placeholder="닉네임을 입력하세요"
        />
        <Button
          variant="outlined"
          color="ligntgreen"
          onClick={onGenerateNickname}
        >
          닉네임 재생성
        </Button>
      </S.InputWrapper>

      <S.SigninButton type="submit" variant="outlined" color="ligntgreen">
        접속하기
      </S.SigninButton>
    </S.Form>
  );
}

export default NicknameForm;
