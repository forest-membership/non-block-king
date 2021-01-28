import React from 'react';
import * as S from './style';

interface INicknameFormProps {
  nicknameForm: React.ReactNode;
}

function MainViewTemplate({ nicknameForm }: INicknameFormProps): JSX.Element {
  return (
    <S.Template>
      <S.FormWrapper>{nicknameForm}</S.FormWrapper>
    </S.Template>
  );
}

export default MainViewTemplate;
