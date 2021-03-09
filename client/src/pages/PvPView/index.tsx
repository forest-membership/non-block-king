import React from 'react';
import PvPViewTemplate from './template';
import Sandbox from '../../components/organisms/Sandbox';
import Button from '../../components/atoms/Button';
import { myPacket, opponentPacket } from '../../seeds/packet';

function PvPView(): JSX.Element {
  return (
    <PvPViewTemplate
      mySandbox={<Sandbox meta={myPacket.meta} game={myPacket.game} />}
      opponentSandbox={
        <Sandbox meta={opponentPacket.meta} game={opponentPacket.game} />
      }
      controlButton={<Button>🔥 게임 시작</Button>}
      redirectButton={<Button>🏠 모드 선택</Button>}
    />
  );
}

export default PvPView;
