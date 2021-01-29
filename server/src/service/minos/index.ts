import IMino from "./I.mino";
import JMino from "./J.mino";
import LMino from "./L.mino";
import OMino from "./O.mino";
import SMino from "./S.mino";
import TMino from "./T.mino";
import ZMino from "./Z.mino";

const shuffleFunction = () => {
    const minos = [IMino, JMino, LMino, OMino, SMino, TMino, ZMino];
    const shuffle = () => minos.sort(() => Math.random() - 0.5);
    return shuffle;
};

const getNextMinos = shuffleFunction();

export default getNextMinos;
