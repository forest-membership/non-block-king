import IMino from "./I.mino";
import JMino from "./J.mino";
import LMino from "./L.mino";
import OMino from "./O.mino";
import SMino from "./S.mino";
import TMino from "./T.mino";
import ZMino from "./Z.mino";

const minos = [IMino, JMino, LMino, OMino, SMino, TMino, ZMino];

minos.forEach((Mino) => {
    new Mino().print();

    console.log();
});

export default minos;
