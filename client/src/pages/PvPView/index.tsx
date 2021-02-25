import React from 'react';
import PvPViewTemplate from './template';
import UserInfoHeader from '../../components/molecules/UserInfoHeader';
import ScoreBoard from '../../components/molecules/ScoreBoard';
import MinoPreviewList from '../../components/organisms/MinoPreviewList';
import TetrisBoard from '../../components/molecules/TetrisBoard';
import Button from '../../components/atoms/Button';

// TODO: 유저 2명 정보를 props 넘겨주는 것으로 변경해야함, 현재는 동일한 정보 복사해서 랜더링
const dummyUser = { nickname: 'simpson' };
const dummyScore = 20000;
const dummyMinos = [
  {
    seq: 1,
    blockArea: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  {
    seq: 2,
    blockArea: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
  },
  {
    seq: 3,
    blockArea: [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  {
    seq: 4,
    blockArea: [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
];
const dummyGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 6, 5, 0, 0, 1, 0, 3, 0],
  [0, 5, 5, 5, 0, 0, 1, 0, 3, 0],
  [0, 2, 2, 0, 0, 4, 1, 1, 3, 0],
  [2, 2, 0, 0, 0, 4, 4, 4, 3, 0],
];

function PvPView(): JSX.Element {
  return (
    <PvPViewTemplate
      userInfoHeaer={<UserInfoHeader userInfo={dummyUser} />}
      scoreBoard={<ScoreBoard score={dummyScore} />}
      minoPreviewList={<MinoPreviewList minos={dummyMinos} />}
      tetrisBoard={<TetrisBoard grid={dummyGrid} />}
      controlButton={<Button>🔥 게임 시작</Button>}
      redirectButton={<Button>🏠 모드 선택</Button>}
    />
  );
}

export default PvPView;
