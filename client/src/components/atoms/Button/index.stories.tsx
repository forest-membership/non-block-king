import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { IButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    componentSubtitle: '공통 컴포넌트 - 버튼',
  },
} as Meta;

export const Default: Story<IButtonProps> = () => <Button>버튼</Button>;

export const Contained: Story<IButtonProps> = () => (
  <Button variant="contained" color="green">
    버튼
  </Button>
);

export const Outlined: Story<IButtonProps> = () => (
  <Button variant="outlined">버튼</Button>
);
