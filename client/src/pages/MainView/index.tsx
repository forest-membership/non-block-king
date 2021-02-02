import React from 'react';
import MainViewTemplate from './template';
import NicknameForm from '../../components/molecules/NicknameForm';
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
  const { isLoading, data, error } = response;

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await requestSignIn();
  };

  console.log(data); // FIXME: 디버깅용 로그

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;

  return (
    <MainViewTemplate nicknameForm={<NicknameForm onSubmit={handleSignIn} />} />
  );
}

export default MainView;
