import React from 'react';
import * as S from './style';

interface IPvPViewTemplateProps {
  userInfoHeaer: React.ReactNode;
  scoreBoard: React.ReactNode;
  minoPreviewList: React.ReactNode;
  tetrisBoard: React.ReactNode;
  controlButton: React.ReactNode;
  redirectButton: React.ReactNode;
}

function PvPViewTemplate({
  userInfoHeaer,
  scoreBoard,
  minoPreviewList,
  tetrisBoard,
  controlButton,
  redirectButton,
}: IPvPViewTemplateProps): JSX.Element {
  return (
    <S.Template>
      <S.PlaygroundWrapper>
        <S.SandboxWrapper>
          <S.MetaWrapper>
            {userInfoHeaer} {scoreBoard}
          </S.MetaWrapper>
          <S.GameWrapper>
            {minoPreviewList} {tetrisBoard}
          </S.GameWrapper>
        </S.SandboxWrapper>
        <S.SandboxWrapper>
          <S.MetaWrapper>
            {userInfoHeaer} {scoreBoard}
          </S.MetaWrapper>
          <S.GameWrapper>
            {minoPreviewList} {tetrisBoard}
          </S.GameWrapper>
        </S.SandboxWrapper>
      </S.PlaygroundWrapper>
      <S.ControlWrapper>
        {controlButton}
        {redirectButton}
      </S.ControlWrapper>
    </S.Template>
  );
}

export default PvPViewTemplate;
