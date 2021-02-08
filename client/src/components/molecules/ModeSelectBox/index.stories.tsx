import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ModeSelectBox, { IModeSelectBoxProps } from '.';

export default {
  title: 'Molecules/ModeSelectBox',
  component: ModeSelectBox,
  parameters: {
    componentSubtitle: '모드 선택 박스',
  },
} as Meta;

const Template: Story<IModeSelectBoxProps> = (args) => (
  <ModeSelectBox {...args} />
);

export const Default = Template.bind({});
