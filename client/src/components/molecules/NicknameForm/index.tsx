import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import * as S from './style';

export interface INicknameFormProps {
  /** 닉네임 값 */
  nickname: string;
  /** 폼 제출 시 실핼할 콜백 함수 */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
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
      <Input
        type="text"
        defaultValue={nickname}
        placeholder="닉네임을 입력하세요"
      />
      <S.ButtonWrapper>
        <Button variant="contained" color="black" onClick={onGenerateNickname}>
          닉네임 재생성
        </Button>
        <Button type="submit" variant="outlined" color="black">
          접속
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default NicknameForm;
