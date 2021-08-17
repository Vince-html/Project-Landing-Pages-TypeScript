import { Story, Meta } from '@storybook/react';
import { GridImage, GridImageProp } from '.';

import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
} as Meta;

export const Template: Story<GridImageProp> = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
