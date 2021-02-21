import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import RankingList, { IRankingListProps } from '.';

export default {
  title: 'Molecules/RankingList',
  component: RankingList,
  parameters: {
    componentSubtitle: '랭킹 리스트',
  },
} as Meta;

const Template: Story<IRankingListProps> = (args) => <RankingList {...args} />;

export const Default = Template.bind({});
Default.args = {
  rankingItems: [
    { ordinal: '1st', username: 'apple', score: 5000 },
    { ordinal: '2nd', username: 'banana', score: 4000 },
    { ordinal: '3th', username: 'pineapple', score: 3000 },
    { ordinal: '4th', username: 'grape', score: 2000 },
    { ordinal: '5th', username: 'peach', score: 1000 },
  ],
};
