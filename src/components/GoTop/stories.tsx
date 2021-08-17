import { GoTop } from '.';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  );
};
