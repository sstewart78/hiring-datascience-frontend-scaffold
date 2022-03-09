import { Story, Meta } from '@storybook/react';
import { Search, SearchProps } from './search';

export default {
  component: Search,
  title: 'Search',
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
