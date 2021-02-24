import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ScoreBoard, { IScoreBoardProps } from '.';

export default {
  title: 'Molecules/ScoreBoard',
  component: ScoreBoard,
  parameters: {
    componentSubtitle: '점수 보드판',
  },
} as Meta;

const Template: Story<IScoreBoardProps> = (args: IScoreBoardProps) => (
  <ScoreBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  score: 2000,
};
