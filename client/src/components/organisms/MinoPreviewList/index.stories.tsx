import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import MinoPreviewList, { IMinoPreviewListProps } from '.';

export default {
  title: 'Organisms/MinoPreviewList',
  component: MinoPreviewList,
  parameters: {
    componentSubtitle: '테트로미노 미리보기 리스트',
  },
} as Meta;

const Template: Story<IMinoPreviewListProps> = (
  args: IMinoPreviewListProps
) => <MinoPreviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  minos: [
    {
      blockArea: [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      blockArea: [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      blockArea: [
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      blockArea: [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    },
  ],
};
