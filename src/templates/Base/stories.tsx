import { Base, BaseProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import { mockBase } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
} as Meta;

export const Template: Story<BaseProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
