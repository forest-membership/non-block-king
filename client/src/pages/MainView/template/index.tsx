import React from 'react';
import ToastBox from '../../../components/molecules/ToastBox';
import * as S from './style';

interface IMainViewTemplateProps {
  isLoading: boolean;
  token: string;
  nicknameForm: React.ReactNode;
  modeSelectBox: React.ReactNode;
}

function MainViewTemplate({
  isLoading,
  token,
  nicknameForm,
  modeSelectBox,
}: IMainViewTemplateProps): JSX.Element {
  const renderContent = () => {
    const targetContent = isLoading ? (
      <div>로딩중</div>
    ) : token ? (
      modeSelectBox
    ) : (
      nicknameForm
    );

    return targetContent;
  };

  return (
    <S.Template>
      <S.ContentWrapper>{renderContent()}</S.ContentWrapper>
      {token && <ToastBox duration={3000}>환영합니다 😄</ToastBox>}
    </S.Template>
  );
}

export default MainViewTemplate;
