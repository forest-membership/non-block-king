import React, { useState } from 'react';
import styled from 'styled-components';

// react의 Component가 해당 속성을 인식할 수 있도록 해준다.
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    visible?: boolean;
  }
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.color || 'white'};
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

type ModalType = {
  className?: string;
  visible?: boolean;
  children?: JSX.Element;
};

const Modal = (props: ModalType): JSX.Element => {
  const [login, setLogin] = useState(false);
  const onLogin = () => setLogin(true);

  return (
    <ModalOverlay visible={!login}>
      <ModalWrapper className={props.className} tabIndex={-1} visible={!login}>
        <ModalInner tabIndex={0} className="modalInner">
          <h1 style={{ color: 'black', margin: '0px' }}>Login</h1>
          <h2 style={{ color: 'black', margin: '0px' }}>Username</h2>
          <input
            style={{ width: '100%' }}
            placeholder="닉네임을 입력해주세요."
          ></input>
          <button onClick={onLogin}>게임시작</button>
          {props.children}
        </ModalInner>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
