import { Dummy } from '.';

export default {
  title: 'Dummy',
  component: Dummy,
  arg: {
    children: 'Dummy',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Dummy {...args} />
    </div>
  );
};
