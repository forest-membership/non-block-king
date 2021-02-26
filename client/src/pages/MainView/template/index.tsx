import React from 'react';
import ToastBox from '../../../components/molecules/ToastBox';
import Spinner from '../../../components/atoms/Spinner';
import * as S from './style';

interface IMainViewTemplateProps {
  isLoading: boolean;
  token: string;
  nicknameForm: React.ReactNode;
  modeSelectBox: React.ReactNode;
  rankingListLeft: React.ReactNode;
  rankingListRight: React.ReactNode;
}

function MainViewTemplate({
  isLoading,
  token,
  nicknameForm,
  modeSelectBox,
  rankingListLeft,
  rankingListRight,
}: IMainViewTemplateProps): JSX.Element {
  const renderContent = () => {
    const targetContent = isLoading ? (
      <Spinner />
    ) : token ? (
      modeSelectBox
    ) : (
      nicknameForm
    );

    return targetContent;
  };

  return (
    <S.Template>
      <S.RankingWrapper>
        {rankingListLeft}
        {rankingListRight}
      </S.RankingWrapper>
      <S.ContentWrapper>{renderContent()}</S.ContentWrapper>
      {token && <ToastBox duration={3000}>환영합니다 😄</ToastBox>}
    </S.Template>
  );
}

export default MainViewTemplate;
