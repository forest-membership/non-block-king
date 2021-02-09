import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import NicknameService from '@/service/nickname';

export const getRandomNickname = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const nicknameService = Container.get(NicknameService);
  const nickname = nicknameService.createNickname();

  res.status(200).json({
    message: '랜덤 닉네임 1개를 생성하였습니다.',
    data: {
      nickname,
    },
  });
};
