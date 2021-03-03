import { Request, Response, NextFunction } from 'express';
import { createJwtToken } from '@/passport';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nickname } = await req.body;
    const token = createJwtToken(nickname);

    res.status(200).json({
      message: 'jwt 토큰을 발행하였습니다.',
      result: token,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
