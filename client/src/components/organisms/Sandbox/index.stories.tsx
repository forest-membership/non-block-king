import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Sandbox, { ISandboxProps } from '.';

export default {
  title: 'Organisms/Sandbox',
  component: Sandbox,
  parameters: {
    componentSubtitle: '유저별 테트리스 플레이 샌드박스',
  },
} as Meta;

const Template: Story<ISandboxProps> = (args: ISandboxProps) => (
  <div style={{ width: '600px' }}>
    <Sandbox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  meta: { userInfo: { nickname: 'simpson' }, score: 20000 },
  game: {
    previewMinos: [
      {
        seq: 1,
        blockArea: [
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        seq: 2,
        blockArea: [
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        seq: 3,
        blockArea: [
          [1, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        seq: 4,
        blockArea: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
    ],
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
  },
};
