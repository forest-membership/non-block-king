import React from 'react';
import Text from '../../atoms/Text';
import * as S from './style';

export interface IScoreBoardProps {
  /** 획득한 점수 */
  score: number;
}

function ScoreBoard({ score }: IScoreBoardProps): JSX.Element {
  return (
    <S.ScoreBoard>
      <Text>점수 : {score}</Text>
    </S.ScoreBoard>
  );
}

export default ScoreBoard;
