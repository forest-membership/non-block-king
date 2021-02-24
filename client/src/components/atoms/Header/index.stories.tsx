import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Header, { IHeaderProps } from '.';

export default {
  title: 'Atoms/Header',
  component: Header,
  parameters: {
    componentSubtitle: '헤더 요소',
  },
} as Meta;

const Template: Story<IHeaderProps> = ({
  level,
  children,
  ...props
}: IHeaderProps) => (
  <Header level={level} {...props}>
    {children}
  </Header>
);

export const Default = Template.bind({});
Default.args = {
  level: 1,
  children: '헤더 요소',
};
