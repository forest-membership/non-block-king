import React from 'react';
import * as S from './style';

interface IRankingItem {
  ordinal: string;
  username: string;
  score: number;
}

export interface IRankingListProps {
  /** 랭킹 정보 목록 */
  rankingItems: IRankingItem[];
}

function RankingList({ rankingItems }: IRankingListProps): JSX.Element {
  const isTopRanker = (ordinal: string) => {
    return ordinal === '1st' || ordinal === '2nd' || ordinal === '3th';
  };

  return (
    <S.RankingList>
      {rankingItems.map((item: IRankingItem, index: number) => (
        <S.RankingListItem key={item.ordinal} animationDelayCriteria={index}>
          <span className="icon">{isTopRanker(item.ordinal) && '👑'}</span>
          <span className="ordinal">{item.ordinal}</span>
          <span className="username">{item.username}</span>
          <span className="score">{item.score}</span>
        </S.RankingListItem>
      ))}
    </S.RankingList>
  );
}

export default RankingList;
