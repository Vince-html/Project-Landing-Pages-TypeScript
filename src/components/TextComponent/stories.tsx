import { TextComponent, TextComponentProp } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'TextComponent',
  component: TextComponent,
  arg: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Maxime officia cupiditate cum
    quisquam laborum atque, sapiente pariatur deserunt iure, facere eius dicta
    reiciendis nostrum adipisci nulla soluta unde dolorum tenetur.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProp> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
