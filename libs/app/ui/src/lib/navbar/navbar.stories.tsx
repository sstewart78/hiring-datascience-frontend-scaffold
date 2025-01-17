import { Story, Meta } from '@storybook/react';
import { Navbar, NavbarProps } from './navbar';

export default {
  component: Navbar,
  title: 'Navbar',
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
