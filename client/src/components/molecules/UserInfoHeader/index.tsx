import React from 'react';
import * as S from './style';

export interface IUserInfoHeaderProps {
  userInfo: { nickname: string }; // TODO: 유저 정보 인터페이스 정하기
}

function UserInfoHeader({ userInfo }: IUserInfoHeaderProps): JSX.Element {
  return <S.UserInfoHeader level={1}>{userInfo.nickname}</S.UserInfoHeader>;
}

export default UserInfoHeader;
