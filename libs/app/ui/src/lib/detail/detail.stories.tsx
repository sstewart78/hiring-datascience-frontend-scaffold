import { Story, Meta } from '@storybook/react';
import { Detail, DetailProps } from './detail';

export default {
  component: Detail,
  title: 'Detail',
} as Meta;

const Template: Story<DetailProps> = (args) => <Detail {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
