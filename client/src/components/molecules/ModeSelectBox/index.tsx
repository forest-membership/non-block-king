import React from 'react';
import Button from '../../atoms/Button';
import * as S from './style';

export interface IModeSelectBoxProps {
  /** 모드 선택시 호출되는 콜백 함수 */
  onSelect: (mode: string) => void;
}

function ModeSelectBox({ onSelect }: IModeSelectBoxProps): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const mode = (e.target as HTMLButtonElement).id;
    onSelect(mode);
  };

  return (
    <S.SelectBox onClick={handleClick}>
      <Button id="PvP" variant="outlined" color="ligntgreen">
        1:1 랜덤 매칭
      </Button>
      <Button id="PvF" variant="outlined" color="ligntgreen">
        친구랑 함께
      </Button>
      <Button id="PvE" variant="outlined" color="ligntgreen">
        모두와 함께
      </Button>
    </S.SelectBox>
  );
}

export default ModeSelectBox;
