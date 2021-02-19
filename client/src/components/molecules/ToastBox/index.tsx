import React, { useEffect, useRef } from 'react';
import * as S from './style';

export interface IToastBoxProps {
  /** 팝업 지속시간(ms) */
  duration: number;
  /** 토스트 팝업에 노출할 컨텐츠 */
  children: React.ReactNode;
}

function ToastBox({ duration, children }: IToastBoxProps): JSX.Element {
  const toastBox = useRef<HTMLDivElement>(null);

  const animatePopup = () => {
    if (!toastBox.current) return;
    toastBox.current.style.transform = `translateY(-150px)`;
  };

  const animatePopdown = () => {
    if (!toastBox.current) return;
    toastBox.current.style.transform = `translateY(0px)`;
  };

  useEffect(() => {
    animatePopup();

    setTimeout(() => {
      animatePopdown();
    }, duration);
  }, []);

  return <S.ToastBox ref={toastBox}>{children}</S.ToastBox>;
}

ToastBox.defaultProps = {
  duration: 0.2,
};

export default ToastBox;
