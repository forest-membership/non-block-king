import { Request, Response, NextFunction } from 'express';
import generateNickname from '@/service/nickname';

class Nickname {
  static async getRandomNickname(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO : 이미 생성된 이름과 비교하는 로직 필요
    res.status(200).json({
      message: '랜덤 닉네임 1개를 생성하였습니다.',
      data: {
        nickname: generateNickname(),
      },
    });
  }
}

export default Nickname;
