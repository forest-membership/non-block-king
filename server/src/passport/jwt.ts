// TODO : refresh token 발행

import passportOfJwt from 'passport-jwt';
import dotenv from 'dotenv';
import { IUser } from '@/types/IUser';
dotenv.config();

const { ExtractJwt, Strategy: JWTStrategy } = passportOfJwt;

const JWTConfig: passportOfJwt.StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.PRIVATE_TOKEN_KEY,
};

const JWTVerify = async (jwtPayload: IUser, done: any) => {
  try {
    // TODO : redis에서 nickname에 해당하는 user를 찾아야 한다.
    const user = {};
    if (user) return done(null, user);
    return done(null, false, { reason: '올바르지 않은 인증정보입니다.' });
  } catch (error) {
    console.error(error);
    done(error);
  }
};

export default new JWTStrategy(JWTConfig, JWTVerify);
