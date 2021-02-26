import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Canvas, { ICanvasProps } from '.';

export default {
  title: 'Atoms/Canvas',
  component: Canvas,
  parameters: {
    componentSubtitle: '캔버스 요소',
  },
} as Meta;

const Template: Story<ICanvasProps> = (args) => <Canvas {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 500,
};
