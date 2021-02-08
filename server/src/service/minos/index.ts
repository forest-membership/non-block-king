import IMino from "@/service/minos/I.mino";
import JMino from "@/service/minos/J.mino";
import LMino from "@/service/minos/L.mino";
import OMino from "@/service/minos/O.mino";
import SMino from "@/service/minos/S.mino";
import TMino from "@/service/minos/T.mino";
import ZMino from "@/service/minos/Z.mino";

const initMinos = () => [new IMino(), new JMino(), new LMino(), new OMino(), new SMino(), new TMino(), new ZMino()];

const shuffleMinos = () => {
    const shuffle = () => initMinos().sort(() => Math.random() - 0.5);
    return shuffle;
};

const getNextMinos = shuffleMinos();

export default getNextMinos;
