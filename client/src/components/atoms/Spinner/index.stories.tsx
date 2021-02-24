import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Spinner from '.';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    componentSubtitle: '로딩 스피너',
  },
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
