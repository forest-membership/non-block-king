import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import MainViewTemplate from './template';
import NicknameForm from '../../components/molecules/NicknameForm';
import ModeSelectBox from '../../components/molecules/ModeSelectBox';
import RankingList from '../../components/molecules/RankingList';
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

// TODO: 실제 랭킹 API와 연동 필요
const dummy = [
  { ordinal: '1st', username: 'apple', score: 5000 },
  { ordinal: '2nd', username: 'banana', score: 4000 },
  { ordinal: '3th', username: 'pineapple', score: 3000 },
  { ordinal: '4th', username: 'grape', score: 2000 },
  { ordinal: '5th', username: 'peach', score: 1000 },
];

function MainView(): JSX.Element {
  const history = useHistory();
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
    history.push(`/${mode}`);
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
      rankingListLeft={<RankingList rankingItems={dummy} />}
      rankingListRight={<RankingList rankingItems={dummy} />}
    />
  );
}

export default MainView;
