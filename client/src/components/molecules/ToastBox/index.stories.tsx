import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ToastBox, { IToastBoxProps } from '.';

export default {
  title: 'Molecules/ToastBox',
  component: ToastBox,
  parameters: {
    componentSubtitle: 'n초간 유지되는 토스트 팝업',
  },
} as Meta;

const Template: Story<IToastBoxProps> = (args: IToastBoxProps) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), args.duration + 1000);
  };

  return (
    <>
      <button onClick={handleToggle}>모달 띄우기</button>
      {open && <ToastBox {...args}>안녕하세요! 😄</ToastBox>}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 3000,
};
