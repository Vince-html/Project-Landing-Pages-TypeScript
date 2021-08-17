import { NavLink, NavLinkProp } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
} as Meta;

export const Template: Story<NavLinkProp> = (args) => {
  return <NavLink {...args} />;
};
