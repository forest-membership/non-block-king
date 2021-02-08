import React from 'react';
import MainViewTemplate from './template';
import NicknameForm from '../../components/molecules/NicknameForm';
import ModeSelectBox from '../../components/molecules/ModeSelectBox';
import useAsync from '../../hooks/useAsync';

// TODO: 로그인 api로 대체 필요
function requestAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 3000);
  });
}

function MainView(): JSX.Element {
  const [response, requestSignIn] = useAsync(requestAsync);
  const { isLoading, data: nickname, error } = response;

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await requestSignIn();
  };

  const handleModeSelect = (mode: string) => {
    /** TODO: 선택된 모드로 라우팅 */
    console.log(mode);
  };

  const handleGenerateNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    /** TODO: 닉네임 생성 API 연동 */
    e.stopPropagation();
    console.log('닉네임 생성하기');
  };

  if (error) return <div>에러발생</div>; // TODO: 에러 사유 토스트 띄우기(ex.닉네임 중복)

  return (
    <MainViewTemplate
      isLoading={isLoading}
      nickname={nickname}
      nicknameForm={
        <NicknameForm
          onSubmit={handleSignIn}
          onGenerateNickname={handleGenerateNickname}
        />
      }
      modeSelectBox={<ModeSelectBox onSelect={handleModeSelect} />}
    />
  );
}

export default MainView;
