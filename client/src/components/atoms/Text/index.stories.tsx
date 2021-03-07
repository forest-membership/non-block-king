import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Text, { ITextProps } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    componentSubtitle: '텍스트 요소',
  },
} as Meta;

export const Default: Story<ITextProps> = () => <Text>텍스트 요소</Text>;
