import { Menu, MenuProp } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import linksmock from '../NavLink/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksmock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
} as Meta;

export const Template: Story<MenuProp> = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
