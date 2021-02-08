import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import NicknameForm, { INicknameFormProps } from '.';

export default {
  title: 'Molecules/NicknameForm',
  component: NicknameForm,
  parameters: {
    componentSubtitle: '닉네임 입력 폼',
  },
} as Meta;

const Template: Story<INicknameFormProps> = (args) => (
  <NicknameForm {...args} />
);

export const Default = Template.bind({});
