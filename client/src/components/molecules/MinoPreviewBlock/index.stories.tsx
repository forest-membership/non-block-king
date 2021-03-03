import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import MinoPreviewBlock, { IMinoPreviewBlock } from '.';

export default {
  title: 'Molecules/MinoPreviewBlock',
  component: MinoPreviewBlock,
  parameters: {
    componentSubtitle: '미노 미리보기 블럭',
  },
} as Meta;

const Template: Story<IMinoPreviewBlock> = (args: IMinoPreviewBlock) => (
  <MinoPreviewBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  mino: {
    seq: 1,
    blockArea: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  },
};
