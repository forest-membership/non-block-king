import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Input, { IInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    componentSubtitle: '공통 컴포넌트 - 인풋',
  },
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: '값을 입력해주세요',
};
