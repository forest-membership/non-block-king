import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Block, { IBlockProps } from '.';

export default {
  title: 'Atoms/Block',
  component: Block,
  parameters: {
    componentSubtitle: 'Div 블럭 요소',
  },
} as Meta;

const Template: Story<IBlockProps> = (args: IBlockProps) => (
  <Block>{args.children}</Block>
);

export const Default = Template.bind({});
Default.args = {
  children: '블럭 요소',
};
