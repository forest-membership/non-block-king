import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainViewTemplate from './template';
import NicknameForm from '../../components/molecules/NicknameForm';
import ModeSelectBox from '../../components/molecules/ModeSelectBox';
import RankingList from '../../components/organisms/RankingList';
import useAsync from '../../hooks/useAsync';
import useSocket from '../../hooks/useSocket';
import AuthAPI from '../../apis/auth';
import { rankers } from '../../seeds/ranking';

// TODO: 로그인 api로 대체 필요
function requestAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'success' });
    }, 3000);
  });
}

function MainView(): JSX.Element {
  const history = useHistory();
  const [signinResponse, requestSignIn] = useAsync(requestAsync);
  const [nicknameResponse, requestNickname] = useAsync(AuthAPI.getNickname);
  const { socket, connect } = useSocket();

  const { isLoading, data: token, error: signinError } = signinResponse;
  const { data: issuedNickname, error: nicknameError } = nicknameResponse;

  useEffect(() => {
    const isLoginSuccess = token !== null;

    if (isLoginSuccess) {
      connect(socket);
      socket.on('connect', () => {
        /** TODO: 토스트 팝업으로 띄우기 */
        console.log('서버 접속 성공');
      });
    }
  }, [token]);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    /** TODO: issuedNickname 활용해서 로그인 API 요청 */
    e.preventDefault();
    requestSignIn();
  };

  const handleModeSelect = useCallback((mode: 'pvp' | 'pve' | 'pvf') => {
    /** TODO: 토스트 팝업으로 띄우기 */
    socket.emit(`join:${mode}`);
    socket.on('join:success', (message: string) => {
      console.log(message);
      history.push(`/${mode}`);
    });
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
      rankingListLeft={<RankingList rankingItems={rankers} />}
      rankingListRight={<RankingList rankingItems={rankers} />}
    />
  );
}

export default MainView;
