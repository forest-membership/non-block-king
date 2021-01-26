import React from 'react';

interface INicknameFormProps {
  nicknameForm: React.ReactNode;
}

function MainViewTemplate({ nicknameForm }: INicknameFormProps): JSX.Element {
  return <main>{nicknameForm}</main>;
}

export default MainViewTemplate;
