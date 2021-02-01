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
