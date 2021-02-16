import React, { useCallback } from 'react';
import MainViewTemplate from './template';
import NicknameForm from '../../components/molecules/NicknameForm';
import ModeSelectBox from '../../components/molecules/ModeSelectBox';
import useAsync from '../../hooks/useAsync';
import AuthAPI from '../../apis/auth';

// TODO: 로그인 api로 대체 필요
function requestAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'success' });
    }, 3000);
  });
}

function MainView(): JSX.Element {
  const [signinResponse, requestSignIn] = useAsync(requestAsync);
  const [nicknameResponse, requestNickname] = useAsync(AuthAPI.getNickname);

  const { isLoading, data: token, error: signinError } = signinResponse;
  const { data: issuedNickname, error: nicknameError } = nicknameResponse;

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    /** TODO: issuedNickname 활용해서 로그인 API 요청 */
    e.preventDefault();
    requestSignIn();
  };

  const handleModeSelect = useCallback((mode: string) => {
    /** TODO: 선택된 모드로 라우팅 */
    console.log(mode);
  }, []);

  const handleGenerateNickname = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      await requestNickname();
    },
    []
  );

  if (signinError || nicknameError) return <div>에러발생</div>; // TODO: 에러 사유 토스트 띄우기(ex.닉네임 중복)

  return (
    <MainViewTemplate
      isLoading={isLoading}
      token={token}
      nicknameForm={
        <NicknameForm
          nickname={issuedNickname?.nickname}
          onSubmit={handleSignIn}
          onGenerateNickname={handleGenerateNickname}
        />
      }
      modeSelectBox={<ModeSelectBox onSelect={handleModeSelect} />}
    />
  );
}

export default MainView;
