import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UserInfoHeader, { IUserInfoHeaderProps } from '.';

export default {
  title: 'Molecules/UserInfoHeader',
  component: UserInfoHeader,
  parameters: {
    componentSubtitle: '유저 메타정보 헤더',
  },
} as Meta;

const Template: Story<IUserInfoHeaderProps> = (args: IUserInfoHeaderProps) => (
  <UserInfoHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userInfo: { nickname: 'sohnjunior' },
};
