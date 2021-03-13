import IMino from '@/service/game/minos/IMino';
import JMino from '@/service/game/minos/JMino';
import LMino from '@/service/game/minos/LMino';
import OMino from '@/service/game/minos/OMino';
import SMino from '@/service/game/minos/SMino';
import TMino from '@/service/game/minos/TMino';
import ZMino from '@/service/game/minos/ZMino';

function getNextMinos() {
  const minos = [
    new IMino(),
    new JMino(),
    new LMino(),
    new OMino(),
    new SMino(),
    new TMino(),
    new ZMino(),
  ];

  return minos.sort(() => Math.random() - 0.5);
}

export default getNextMinos;
