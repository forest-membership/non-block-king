const MAP_HEIGHT = 20;
const MAP_WEIGHT = 10;

class TetrisGame {
    gameMap: Array<Array<number>>;
    constructor() {
        this.gameMap = new Array(MAP_HEIGHT).fill(0).map((el) => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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

new TetrisGame().print();

export default TetrisGame;
