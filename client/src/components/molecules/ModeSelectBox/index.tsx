import React from 'react';
import Button from '../../atoms/Button';
import * as S from './style';

interface IModeSelectBox {
  onSelect: (mode: string) => void;
}

function ModeSelectBox({ onSelect }: IModeSelectBox): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const mode = (e.target as HTMLButtonElement).id;
    onSelect(mode);
  };

  return (
    <S.SelectBox onClick={handleClick}>
      <Button id="PvP">1:1 랜덤 매칭</Button>
      <Button id="PvF">친구랑 함께</Button>
      <Button id="PvE">모두와 함께</Button>
    </S.SelectBox>
  );
}

export default ModeSelectBox;
