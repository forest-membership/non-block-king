const MAP_HEIGHT = 20;
const MAP_WEIGHT = 10;
const FULL = 1;

class TetrisGame {
    gameMap: number[][];
    gamePoint: number;

    constructor() {
        this.gameMap = new Array(MAP_HEIGHT).fill(0).map(() => new Array(MAP_WEIGHT).fill(0));
        this.gamePoint = 0;
    }

    pullNextLine(cur: number) {
        for (let i = cur; i < MAP_HEIGHT - 1; i++) {
            this.gameMap[i] = this.gameMap[i + 1];
        }

        this.gameMap[MAP_HEIGHT - 1] = new Array(MAP_WEIGHT).fill(0);
    }

    isLineFull(line: Array<number>): boolean {
        for (let i = 0; i < line.length; i++) {
            if (line[i] !== FULL) return false;
        }
        return true;
    }

    checkLine(cur: number = 0) {
        for (let i = cur; i < MAP_HEIGHT; i++) {
            if (this.isLineFull(this.gameMap[i])) {
                this.pullNextLine(i);
                this.gamePoint++;
                i--;
            }
        }
    }

    print() {
        for (let i = 0; i < MAP_HEIGHT; i++) {
            for (let j = 0; j < MAP_WEIGHT; j++) {
                process.stdout.write(String(this.gameMap[i][j]) + " ");
            }
            console.log();
        }
    }
}

export default TetrisGame;
