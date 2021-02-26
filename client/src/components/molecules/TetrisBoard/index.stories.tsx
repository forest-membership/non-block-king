import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import TetrisBoard, { ITetrisBoardProps } from '.';
import { CANVAS_ROWS, CANVAS_COLS } from './constants';
import { create2DArray } from '../../../utils';

export default {
  title: 'Molecules/TetrisBoard',
  component: TetrisBoard,
  parameters: {
    componentSubtitle: '테트리스 보드판',
  },
} as Meta;

const Template: Story<ITetrisBoardProps> = (args: ITetrisBoardProps) => (
  <TetrisBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  grid: create2DArray<number>(CANVAS_ROWS, CANVAS_COLS, 0),
};

export const WithBlocks = Template.bind({});
WithBlocks.args = {
  grid: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 6, 5, 0, 0, 1, 0, 3, 0],
    [0, 5, 5, 5, 0, 0, 1, 0, 3, 0],
    [0, 2, 2, 0, 0, 4, 1, 1, 3, 0],
    [2, 2, 0, 0, 0, 4, 4, 4, 3, 0],
  ],
};
