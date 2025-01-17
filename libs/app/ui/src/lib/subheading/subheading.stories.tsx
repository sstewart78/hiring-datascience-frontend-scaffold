import { Story, Meta } from '@storybook/react';
import { Subheading, SubheadingProps } from './subheading';

export default {
  component: Subheading,
  title: 'Subheading',
} as Meta;

const Template: Story<SubheadingProps> = (args) => <Subheading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: '',
};
