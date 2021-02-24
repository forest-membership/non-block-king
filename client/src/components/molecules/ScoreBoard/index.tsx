import React from 'react';
import Text from '../../atoms/Text';
import Block from '../../atoms/Block';

export interface IScoreBoardProps {
  /** 획득한 점수 */
  score: number;
}

function ScoreBoard({ score }: IScoreBoardProps): JSX.Element {
  return (
    <Block>
      <Text>점수 : {score}</Text>
    </Block>
  );
}

export default ScoreBoard;
