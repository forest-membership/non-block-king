const MAP_HEIGHT = 20;
const MAP_WEIGHT = 10;

// const printOneLine = (arr: Array<number>) => {
//     for (let i = 0; i < MAP_WEIGHT; i++) {
//         process.stdout.write(arr[i] + " ");
//     }
//     console.log();
// };

class TetrisGame {
    gameMap: Array<Array<number>>;
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

    isLineFull(line: Array<number>) {
        return line.reduce((acc, cur) => acc + cur) === MAP_WEIGHT;
    }

    checkLine(cur: number = 0) {
        for (let i = cur; i < MAP_HEIGHT; i++) {
            if (this.isLineFull(this.gameMap[i])) {
                this.pullNextLine(i);
                this.gamePoint++;
                i--;
            }
        }
        return this;
    }

    print() {
        console.log("@@@@@@@@@@@@@@@@@@@");
        for (let i = 0; i < MAP_HEIGHT; i++) {
            for (let j = 0; j < MAP_WEIGHT; j++) {
                process.stdout.write(String(this.gameMap[i][j]) + " ");
            }
            console.log();
        }
        console.log("@@@@@@@@@@@@@@@@@@@");
        return this;
    }
}

new TetrisGame().checkLine().print();

export default TetrisGame;
