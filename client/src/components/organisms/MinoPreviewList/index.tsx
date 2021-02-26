import React from 'react';
import MinoPreviewBlock from '../../molecules/MinoPreviewBlock';
import * as S from './style';

interface IMino {
  /** 순서 번호 */
  seq: number;
  /** 미노 블럭영역 */
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
        <li className="block-item" key={mino.seq}>
          <MinoPreviewBlock mino={mino} />
        </li>
      ))}
    </S.MinoPreviewList>
  );
}

export default MinoPreviewList;