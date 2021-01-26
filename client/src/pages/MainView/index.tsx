import React from 'react';
import MainViewTemplate from './template';
import NicknameForm from '../../components/molecules/NicknameForm';

function MainView(): JSX.Element {
  return <MainViewTemplate nicknameForm={<NicknameForm />} />;
}

export default MainView;
