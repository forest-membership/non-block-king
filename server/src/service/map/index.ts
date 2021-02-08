import getNextMinos from "@/service/minos";
import STATUS from "@/service/status";
import Block from "@/service/minos/block";
import Mino from "@/service/minos/mino";
import { makeTwoDimensionArray } from "@/utils";

const MINO_HEIGHT = 4;
const MINO_WIDTH = 4;
const TETRA = 4;
const MAP_WIDTH = 10;
const MAP_HEIGHT = 20 + MINO_HEIGHT;

class TetrisGame {
    private gameMap: number[][];
    private gamePoint: number;
    private curMinoSet: Mino[];
    private curMino?: Mino;

    constructor() {
        this.gameMap = makeTwoDimensionArray(MAP_HEIGHT, MAP_WIDTH, STATUS.VOID);
        this.gamePoint = 0;
        this.curMinoSet = getNextMinos();
        this.curMino = this.getNextMino();
    }

    getNextMino(): Mino | undefined {
        if (!this.curMinoSet.length) {
            this.curMinoSet = getNextMinos();
        }

        const nextMino = this.curMinoSet.pop();
        return nextMino;
    }

    isMovable() {
        if (!this.curMino) {
            return false;
        }

        const curMinoPivot = this.curMino.pivot;
        const curMinoArea = this.curMino.area;
        const pivotY = curMinoPivot.yPos + 1;
        const pivotX = curMinoPivot.xPos;
        for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
            for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
                let curBlockOfMap;
                if (this.gameMap[pivotY]) curBlockOfMap = this.gameMap[pivotY][pivotX];

                if (curMinoArea[i - pivotY][j - pivotX]) {
                    if (MAP_HEIGHT < i) {
                        return false;
                    }
                }

                if (curBlockOfMap === STATUS.FULL) {
                    return false;
                }
            }
        }
        return true;
    }

    removeMovingMino(): boolean {
        let count = 0;
        for (let i = 0; i < this.gameMap.length; i++) {
            for (let j = 0; j < this.gameMap[0].length; j++) {
                if (this.gameMap[i][j] === STATUS.MINO) {
                    this.gameMap[i][j] = STATUS.VOID;
                    count++;
                    if (count === TETRA) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    goDownBlock() {
        if (!this.isMovable() || !this.curMino) {
            return false;
        }
        const curMinoPivot = this.curMino.pivot;
        const curMinoArea = this.curMino.area;
        const pivotY = curMinoPivot.yPos;
        const pivotX = curMinoPivot.xPos;

        this.removeMovingMino();
        this.curMino.pivot.yPos++;

        for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
            for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
                if (!this.gameMap[i]) {
                    continue;
                }
                this.gameMap[i][j] = curMinoArea[i - pivotY][j - pivotX];
            }
        }
    }

    dispatchMinoToMap() {
        this.curMino?.setpivotReference(new Block("red", 0, 0));
        if (!this.curMino) {
            return false;
        }

        const curMinoPivot = this.curMino.pivot;
        const curMinoArea = this.curMino.area;
        const pivotY = curMinoPivot.yPos;
        const pivotX = curMinoPivot.xPos;

        for (let i = pivotY; i < pivotY + MINO_HEIGHT; i++) {
            for (let j = pivotX; j < pivotX + MINO_WIDTH; j++) {
                this.gameMap[i][j] = curMinoArea[i - pivotY][j - pivotX];
            }
        }
    }

    pullNextLine(cur: number) {
        for (let i = cur; i < MAP_HEIGHT - 1; i++) {
            this.gameMap[i] = this.gameMap[i + 1];
        }
        this.gameMap[MAP_HEIGHT - 1] = new Array(MAP_WIDTH).fill(STATUS.VOID);
    }

    isLineFull(line: Array<number>): boolean {
        for (let i = 0; i < line.length; i++) {
            if (line[i] !== STATUS.FULL) return false;
        }
        return true;
    }

    checkIfLineIsFullAndGiveScore(cur: number = 0) {
        for (let i = cur; i < MAP_HEIGHT; i++) {
            if (this.isLineFull(this.gameMap[i])) {
                this.pullNextLine(i);
                this.gamePoint++;
                i--;
            }
        }
    }

    print() {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        for (let i = 0; i < MAP_HEIGHT; i++) {
            for (let j = 0; j < MAP_WIDTH; j++) {
                process.stdout.write(String(this.gameMap[i][j]) + " ");
            }
            if (i === 3) {
                process.stdout.write(" <- 이 선 포함 이 위는 보이지 않습니다.");
            }
            console.log();
        }
    }
}

export default TetrisGame;
