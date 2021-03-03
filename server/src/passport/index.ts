import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import passport from 'passport';
import { IUser } from '@/types/IUser';
dotenv.config();

export const isAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate('jwt', (error, user) => {
    if (user) {
      req.user = user;
      return next();
    }
    return res
      .status(400)
      .send({ message: 'JWT 인증에 실패하였습니다.', error: error });
  })(req, res, next);
};

export const createJwtToken = (user: IUser): string => {
  if (typeof process.env.PRIVATE_TOKEN_KEY !== 'string') {
    throw new Error('토큰의 환경 값이 없습니다.');
  }

  const token = jwt.sign(
    {
      nickname: user.nickname,
      DATE: Date.now(),
    },
    // TODO : token key 값을 정의할 것
    process.env.PRIVATE_TOKEN_KEY
  );
  return token;
};
