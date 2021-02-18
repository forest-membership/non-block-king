import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ToastBox, { IToastBoxProps } from '.';

export default {
  title: 'Molecules/ToastBox',
  component: ToastBox,
  parameters: {
    componentSubtitle: 'n초간 유지되는 토스트 팝업',
  },
} as Meta;

const Template: Story<IToastBoxProps> = (args) => (
  <ToastBox {...args}>안녕하세요!</ToastBox>
);

export const Default = Template.bind({});
Default.args = {
  duration: 3000,
};
