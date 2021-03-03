export interface IMino {
  /** 순서 번호 */
  seq: number;
  /** 미노 블럭영역 */
  blockArea: number[][];
}

export interface IGamePacket {
  meta: {
    userInfo: {
      nickname: string;
    };
    score: number;
  };
  game: {
    previewMinos: IMino[];
    grid: number[][];
  };
}
