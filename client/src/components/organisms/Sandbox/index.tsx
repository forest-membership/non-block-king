import React from 'react';
import UserInfoHeader from '../../molecules/UserInfoHeader';
import ScoreBoard from '../../molecules/ScoreBoard';
import MinoPreviewList from '../MinoPreviewList';
import TetrisBoard from '../../molecules/TetrisBoard';
import { IMino } from '../../../@types';
import * as S from './style';

export interface ISandboxProps {
  meta: { userInfo: { nickname: string }; score: number };
  game: { previewMinos: IMino[]; grid: number[][] };
}

function Sandbox({ meta, game }: ISandboxProps): JSX.Element {
  return (
    <S.Sandbox>
      <S.MetaWrapper>
        <UserInfoHeader userInfo={meta.userInfo} />
        <ScoreBoard score={meta.score} />
      </S.MetaWrapper>
      <S.GameWrapper>
        <MinoPreviewList minos={game.previewMinos} />
        <TetrisBoard grid={game.grid} />
      </S.GameWrapper>
    </S.Sandbox>
  );
}

export default Sandbox;
