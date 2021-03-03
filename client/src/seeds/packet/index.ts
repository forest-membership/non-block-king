import { IGamePacket } from '../../@types';

export const myPacket: IGamePacket = {
  meta: {
    userInfo: {
      nickname: 'simpson',
    },
    score: 30000,
  },
  game: {
    previewMinos: [
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
    ],
    grid: [
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
    ],
  },
};

export const opponentPacket: IGamePacket = {
  meta: {
    userInfo: {
      nickname: 'bart',
    },
    score: 30220,
  },
  game: {
    previewMinos: [
      {
        seq: 1,
        blockArea: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        seq: 2,
        blockArea: [
          [1, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
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
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
        ],
      },
    ],
    grid: [
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
    ],
  },
};
