import React from 'react';
import * as S from './style';

interface IPvPViewTemplateProps {
  mySandbox: React.ReactNode;
  opponentSandbox: React.ReactNode;
  controlButton: React.ReactNode;
  redirectButton: React.ReactNode;
}

function PvPViewTemplate({
  mySandbox,
  opponentSandbox,
  controlButton,
  redirectButton,
}: IPvPViewTemplateProps): JSX.Element {
  return (
    <S.Template>
      <S.PlaygroundWrapper>
        <S.SandboxWrapper>{mySandbox}</S.SandboxWrapper>
        <S.SandboxWrapper>{opponentSandbox}</S.SandboxWrapper>
      </S.PlaygroundWrapper>
      <S.ControlWrapper>
        {controlButton}
        {redirectButton}
      </S.ControlWrapper>
    </S.Template>
  );
}

export default PvPViewTemplate;
