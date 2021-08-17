import { MenuLink, MenuLinkProp } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com',
  },
  argsTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<MenuLinkProp> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
