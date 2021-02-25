import React from 'react';
import MinoPreviewBlock from '../../molecules/MinoPreviewBlock';
import * as S from './style';

interface IMino {
  blockArea: number[][];
}

export interface IMinoPreviewListProps {
  /** 미리보기 요소 */
  minos: IMino[];
}

function MinoPreviewList({ minos }: IMinoPreviewListProps): JSX.Element {
  return (
    <S.MinoPreviewList>
      {minos.map((mino: IMino) => (
        <li className="block-item">
          <MinoPreviewBlock mino={mino} />
        </li>
      ))}
    </S.MinoPreviewList>
  );
}

export default MinoPreviewList;
