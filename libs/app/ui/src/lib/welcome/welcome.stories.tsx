import { Story, Meta } from '@storybook/react';
import { Welcome, WelcomeProps } from './welcome';

export default {
  component: Welcome,
  title: 'Welcome',
} as Meta;

const Template: Story<WelcomeProps> = (args) => <Welcome {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: '',
};
